import { createServer } from "node:http";
import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const envPath = resolve(process.cwd(), ".env.local");

if (existsSync(envPath)) {
  const lines = readFileSync(envPath, "utf8").split(/\r?\n/);

  for (const line of lines) {
    const trimmed = line.trim();

    if (!trimmed || trimmed.startsWith("#") || !trimmed.includes("=")) {
      continue;
    }

    const [key, ...rest] = trimmed.split("=");
    const value = rest.join("=").replace(/^["']|["']$/g, "");

    if (key && process.env[key] == null) {
      process.env[key] = value;
    }
  }
}

const port = Number(process.env.TG_SERVER_PORT || 8787);
const token = process.env.TELEGRAM_BOT_TOKEN;
const chatId = process.env.TELEGRAM_CHAT_ID;
const allowedOrigin = process.env.TG_ALLOWED_ORIGIN || "http://127.0.0.1:3000";

function sendJson(response, status, payload) {
  response.writeHead(status, {
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Origin": allowedOrigin,
    "Content-Type": "application/json; charset=utf-8",
  });
  response.end(JSON.stringify(payload));
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

async function readBody(request) {
  const chunks = [];

  for await (const chunk of request) {
    chunks.push(chunk);
  }

  return Buffer.concat(chunks).toString("utf8");
}

async function sendTelegram(payload) {
  if (!token || !chatId) {
    throw new Error("Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID in .env.local");
  }

  const text = [
    "<b>Новая заявка с MKZV WEB</b>",
    "",
    `<b>Имя:</b> ${escapeHtml(payload.name || "не указано")}`,
    `<b>Что нужно:</b> ${escapeHtml(payload.request || "не указано")}`,
    `<b>Срок / бюджет:</b> ${escapeHtml(payload.timeline || "не указано")}`,
    `<b>Контакт:</b> ${escapeHtml(payload.contact || "не указано")}`,
    `<b>Страница:</b> ${escapeHtml(payload.page || "не указано")}`,
  ].join("\n");

  const telegramResponse = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    body: JSON.stringify({
      chat_id: chatId,
      disable_web_page_preview: true,
      parse_mode: "HTML",
      text,
    }),
    headers: { "Content-Type": "application/json" },
    method: "POST",
  });

  if (!telegramResponse.ok) {
    const details = await telegramResponse.text();
    throw new Error(`Telegram API error ${telegramResponse.status}: ${details}`);
  }
}

const server = createServer(async (request, response) => {
  if (request.method === "OPTIONS") {
    sendJson(response, 204, {});
    return;
  }

  if (request.url !== "/api/lead" || request.method !== "POST") {
    sendJson(response, 404, { ok: false, error: "Not found" });
    return;
  }

  try {
    const rawBody = await readBody(request);
    const payload = JSON.parse(rawBody || "{}");

    if (!payload.name || !payload.request || !payload.contact) {
      sendJson(response, 400, { ok: false, error: "Required fields: name, request, contact" });
      return;
    }

    await sendTelegram(payload);
    sendJson(response, 200, { ok: true });
  } catch (error) {
    console.error(error);
    sendJson(response, 500, { ok: false, error: "Telegram delivery failed" });
  }
});

server.listen(port, "127.0.0.1", () => {
  console.log(`MKZV Telegram lead server: http://127.0.0.1:${port}/api/lead`);
  console.log(`Allowed origin: ${allowedOrigin}`);
});
