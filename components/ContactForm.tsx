"use client";

import { FormEvent, useState } from "react";

type SubmitState = "idle" | "sending" | "sent" | "error";

const configuredEndpoint = process.env.NEXT_PUBLIC_TG_ENDPOINT;
const localEndpoint = "http://127.0.0.1:8787/api/lead";

function getEndpoint() {
  if (configuredEndpoint) {
    return configuredEndpoint;
  }

  if (typeof window !== "undefined" && ["127.0.0.1", "localhost"].includes(window.location.hostname)) {
    return localEndpoint;
  }

  return "";
}

export function ContactForm() {
  const [state, setState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("Форма готова к локальному Telegram-боту. Для продакшена следующим шагом подключим Cloudflare endpoint.");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const endpoint = getEndpoint();

    if (!endpoint) {
      setState("error");
      setMessage("На production пока не подключён endpoint для Telegram. Локально запусти npm run dev:tg или позже подключим Cloudflare Worker.");
      return;
    }

    setState("sending");
    setMessage("Отправляю заявку в Telegram...");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || "").trim(),
      request: String(formData.get("request") || "").trim(),
      timeline: String(formData.get("timeline") || "").trim(),
      contact: String(formData.get("contact") || "").trim(),
      page: window.location.href,
    };

    try {
      const response = await fetch(endpoint, {
        body: JSON.stringify(payload),
        headers: { "Content-Type": "application/json" },
        method: "POST",
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      setState("sent");
      setMessage("Заявка отправлена. Если бот подключён — сообщение уже в Telegram.");
      form.reset();
    } catch {
      setState("error");
      setMessage("Не получилось отправить. Проверь, что Telegram-сервер запущен, а токен и chat id лежат в .env.local.");
    }
  };

  return (
    <form className="contact-form panel grid min-w-0 gap-4 p-4 md:p-6" onSubmit={handleSubmit}>
      <label className="grid gap-2">
        <span className="mono">Имя</span>
        <input name="name" placeholder="Ваше имя" required />
      </label>
      <label className="grid gap-2">
        <span className="mono">Что нужно</span>
        <textarea name="request" placeholder="Лендинг / сайт эксперта / сервис / редизайн" required />
      </label>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2">
          <span className="mono">Срок / бюджет</span>
          <input name="timeline" placeholder="Диапазон или дедлайн" />
        </label>
        <label className="grid gap-2">
          <span className="mono">Контакт</span>
          <input name="contact" placeholder="Telegram / Email" required />
        </label>
      </div>
      <button className="thin-button mt-2 w-full" disabled={state === "sending"} type="submit">
        {state === "sending" ? "Отправляю" : "Получить первый разбор"} <span aria-hidden="true">→</span>
      </button>
      <p className={`form-status mono ${state === "sent" ? "is-ok" : ""} ${state === "error" ? "is-error" : ""}`} role="status">
        {message}
      </p>
    </form>
  );
}
