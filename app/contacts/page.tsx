import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { tgptPreview } from "@/data/projects";
import { socials } from "@/data/socials";

export const metadata: Metadata = {
  title: "Контакты | MKZV WEB",
  description: "Обсудить проект: Telegram, GitHub и форма заявки для быстрого старта.",
};

const contactHints = [
  "что продаёшь или запускаешь",
  "кому нужен сайт",
  "какой результат ждёшь",
  "есть ли тексты, референсы, домен",
];

export default function ContactsPage() {
  return (
    <>
      <Header active="Контакты" />
      <main className="page-shell page-grid border-x border-[var(--line)] px-4 py-8 md:px-6 md:py-10">
        <section className="contacts-head grid gap-8 border-b border-[var(--line)] pb-10 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.58fr)]">
          <div>
            <p className="mono mb-7 text-[var(--muted)]">06. Contacts / request / launch</p>
            <h1 className="display case-title">Обсудить<br />сайт</h1>
          </div>
          <p className="copy self-end text-[var(--muted)]">
            Напиши, что продаёшь и какой сайт нужен. Я быстро скажу, с чего начать.
          </p>
        </section>
        <section className="contacts-grid grid gap-7 py-9 lg:grid-cols-[minmax(0,0.73fr)_minmax(0,1fr)]">
          <div>
            <p className="mono mb-5 text-[var(--paper)]">01. Связь</p>
            <div className="grid gap-3">
              {socials.map((social) => (
                <a
                  className="contact-link grid min-w-0 gap-3 border border-[var(--line)] bg-[var(--panel)] p-4 md:grid-cols-[102px_minmax(0,1fr)_24px] md:items-center"
                  href={social.href}
                  key={social.name}
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="mono text-[var(--paper)]">{social.name}</span>
                  <span className="mono truncate text-[var(--muted)]">{social.value}</span>
                  <span aria-hidden="true" className="mono text-right">→</span>
                </a>
              ))}
            </div>
            <div className="mt-4 grid gap-3">
              <p className="mono border border-[var(--line)] p-4 leading-5 text-[var(--muted)]">
                Быстрее всего — написать в Telegram. Форма ниже уже готова к локальному Telegram-боту: сервер примет заявку и отправит её тебе сообщением.
              </p>
              <div className="panel p-4">
                <p className="mono text-[var(--paper)]">Что написать в первом сообщении</p>
                <ul className="mt-4 grid gap-2">
                  {contactHints.map((hint) => <li className="mono package-point" key={hint}>{hint}</li>)}
                </ul>
              </div>
            </div>
          </div>
          <div className="grid gap-3">
            <ContactForm />
            <div className="tgpt-mini panel p-4">
              <p className="mono text-[var(--paper)]">Позже подключим TGPT</p>
              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                {tgptPreview.map((item, index) => <p className="mono package-point" key={item}>0{index + 1} / {item}</p>)}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
