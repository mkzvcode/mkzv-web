import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { socials } from "@/data/socials";

export const metadata: Metadata = {
  title: "Контакты | MKZV WEB",
  description: "Обсудить проект: Telegram, GitHub и форма заявки для быстрого старта.",
};

export default function ContactsPage() {
  return (
    <>
      <Header active="Контакты" />
      <main className="page-shell page-grid border-x border-[var(--line)] px-4 py-8 md:px-6 md:py-10">
        <section className="contacts-head grid gap-8 border-b border-[var(--line)] pb-10 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.58fr)]">
          <div><p className="mono mb-7 text-[var(--muted)]">06. Contacts / request / launch</p><h1 className="display case-title">Собрать<br />проект</h1></div>
          <p className="copy self-end text-[var(--muted)]">Есть задача или идея? Напиши — обсудим детали и найдём лучший первый шаг.</p>
        </section>
        <section className="contacts-grid grid gap-7 py-9 lg:grid-cols-[minmax(0,0.73fr)_minmax(0,1fr)]">
          <div>
            <p className="mono mb-5 text-[var(--paper)]">01. Связь</p>
            <div className="grid gap-3">{socials.map((social) => <a className="contact-link grid min-w-0 gap-3 border border-[var(--line)] bg-[var(--panel)] p-4 md:grid-cols-[102px_minmax(0,1fr)_24px] md:items-center" href={social.href} key={social.name} rel="noreferrer" target="_blank"><span className="mono text-[var(--paper)]">{social.name}</span><span className="mono truncate text-[var(--muted)]">{social.value}</span><span aria-hidden="true" className="mono text-right">→</span></a>)}</div>
            <p className="mono mt-4 border border-[var(--line)] p-4 leading-5 text-[var(--muted)]">Telegram-бот подключим позже. Сейчас форма — визуальная заготовка.</p>
          </div>
          <form className="contact-form panel grid min-w-0 gap-4 p-4 md:p-6">
            <label className="grid gap-2"><span className="mono">Имя</span><input placeholder="Ваше имя" /></label>
            <label className="grid gap-2"><span className="mono">Задача</span><textarea placeholder="Кратко опишите проект" /></label>
            <div className="grid gap-4 md:grid-cols-2"><label className="grid gap-2"><span className="mono">Бюджет</span><input placeholder="Диапазон" /></label><label className="grid gap-2"><span className="mono">Контакт</span><input placeholder="Telegram / Email" /></label></div>
            <button className="thin-button mt-2 w-full" type="button">Отправить заявку <span aria-hidden="true">→</span></button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}
