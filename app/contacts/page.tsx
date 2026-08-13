import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
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
          <div><p className="mono mb-7 text-[var(--muted)]">06. Contacts / request / launch</p><h1 className="display case-title">Обсудить<br />сайт</h1></div>
          <p className="copy self-end text-[var(--muted)]">Напиши, какой сайт нужен и зачем он бизнесу. Я посмотрю задачу, предложу первый маршрут и скажу, с чего лучше начать: лендинг, многостраничник или продуктовая сборка.</p>
        </section>
        <section className="contacts-grid grid gap-7 py-9 lg:grid-cols-[minmax(0,0.73fr)_minmax(0,1fr)]">
          <div>
            <p className="mono mb-5 text-[var(--paper)]">01. Связь</p>
            <div className="grid gap-3">{socials.map((social) => <a className="contact-link grid min-w-0 gap-3 border border-[var(--line)] bg-[var(--panel)] p-4 md:grid-cols-[102px_minmax(0,1fr)_24px] md:items-center" href={social.href} key={social.name} rel="noreferrer" target="_blank"><span className="mono text-[var(--paper)]">{social.name}</span><span className="mono truncate text-[var(--muted)]">{social.value}</span><span aria-hidden="true" className="mono text-right">→</span></a>)}</div>
            <div className="mt-4 grid gap-3">
              <p className="mono border border-[var(--line)] p-4 leading-5 text-[var(--muted)]">Быстрее всего — написать в Telegram. Форма пока работает как бриф-заготовка: Telegram-бот подключим следующим этапом.</p>
              <div className="panel p-4">
                <p className="mono text-[var(--paper)]">Что написать в первом сообщении</p>
                <ul className="mt-4 grid gap-2">{contactHints.map((hint) => <li className="mono package-point" key={hint}>{hint}</li>)}</ul>
              </div>
            </div>
          </div>
          <form className="contact-form panel grid min-w-0 gap-4 p-4 md:p-6">
            <label className="grid gap-2"><span className="mono">Имя</span><input placeholder="Ваше имя" /></label>
            <label className="grid gap-2"><span className="mono">Что нужно</span><textarea placeholder="Например: лендинг для услуги, сайт эксперта, корпоративный сайт, интерфейс сервиса" /></label>
            <div className="grid gap-4 md:grid-cols-2"><label className="grid gap-2"><span className="mono">Срок / бюджет</span><input placeholder="Диапазон или дедлайн" /></label><label className="grid gap-2"><span className="mono">Контакт</span><input placeholder="Telegram / Email" /></label></div>
            <button className="thin-button mt-2 w-full" type="button">Получить первый разбор <span aria-hidden="true">→</span></button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}
