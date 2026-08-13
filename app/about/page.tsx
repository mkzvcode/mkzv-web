import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SectionLabel } from "@/components/SectionLabel";
import { audiences, services, trustItems } from "@/data/projects";

export const metadata: Metadata = {
  title: "Обо мне | MKZV WEB",
  description: "Направления работы, подход и стек: как я собираю сайты и интерфейсы от структуры до запуска.",
};

const principles = ["Один контакт", "Дизайн + код", "Запуск под ключ", "Рост после релиза"];

export default function AboutPage() {
  return <><Header active="Обо мне" /><main className="page-shell page-grid border-x border-[var(--line)] px-4 py-8 md:px-6 md:py-10">
    <section className="about-head grid gap-8 border-b border-[var(--line)] pb-10 lg:grid-cols-[minmax(0,0.74fr)_minmax(320px,0.48fr)]"><div><p className="mono mb-7 text-[var(--muted)]">04. About / why MKZV</p><h1 className="display case-title">Сайт должен<br />продавать</h1></div><p className="copy self-end text-[var(--muted)]">Меня зовут Максим. Я собираю сайты как рабочую систему: смысл, дизайн, код, скорость, адаптив и путь до заявки. Без разрыва между красивым макетом и тем, что реально можно запустить.</p></section>
    <section className="section"><SectionLabel index="01" title="Направления" /><div className="grid gap-3">{services.map((service) => <article className="about-service grid min-w-0 gap-5 border border-[var(--line)] bg-[var(--panel)] p-4 lg:grid-cols-[58px_minmax(0,0.88fr)_minmax(240px,0.62fr)_34px] lg:items-center" key={service.title}><span className="mono text-[var(--muted)]">[{service.meta}]</span><h2 className="display direction-title">{service.title}</h2><p className="copy text-[var(--muted)]">{service.text}</p><span className="technical-plus hidden h-10 lg:block" /></article>)}</div></section>
    <section className="section about-approach grid gap-7 border-t border-[var(--line)] pt-10 lg:grid-cols-[150px_minmax(0,1fr)]"><p className="mono text-[var(--paper)]">02. Подход</p><p className="copy-lg max-w-5xl text-[var(--muted)]">Красивый сайт сам по себе не продаёт. Продаёт ясность: что вы делаете, почему вам можно доверять, сколько шагов до контакта и что будет после отправки заявки.</p></section>
    <section className="grid gap-3 pb-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1fr)]"><div className="panel p-5"><p className="mono text-[var(--muted)]">03. Инструменты</p><h2 className="display mt-8 text-[clamp(1.9rem,3.1vw,3.8rem)]">Код — часть<br />продажи</h2><p className="copy mt-6 text-[var(--muted)]">Работаю с Next.js, React, TypeScript, API, формами, аналитикой, хостингом и современным CSS. Стек выбираю под задачу: быстрый запуск, понятная поддержка, нормальная скорость.</p></div><div className="panel p-5"><p className="mono text-[var(--muted)]">04. Для кого</p><div className="mt-8 grid gap-5 sm:grid-cols-2">{audiences.map((item) => <div key={item.title}><p className="mono text-[var(--paper)]">{item.title}</p><p className="copy mt-3 text-[var(--muted)]">{item.text}</p></div>)}</div></div></section>
    <section className="grid gap-3 pb-10 md:grid-cols-2">{trustItems.map((item, index) => <div className="panel p-5" key={item}><p className="mono text-[var(--muted)]">0{index + 1} / аргумент</p><p className="copy-lg mt-7 text-[var(--paper)]">{item}</p></div>)}</section>
    <section className="grid gap-3 pb-10 md:grid-cols-4">{principles.map((item) => <div className="panel p-4" key={item}><p className="mono text-[var(--paper)]">{item}</p></div>)}</section>
  </main><Footer /></>;
}
