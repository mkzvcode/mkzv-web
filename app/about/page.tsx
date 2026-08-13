import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SectionLabel } from "@/components/SectionLabel";
import { services } from "@/data/projects";

export const metadata: Metadata = {
  title: "Обо мне | MKZV WEB",
  description: "Направления работы, подход и стек: как я собираю сайты и интерфейсы от структуры до запуска.",
};

const principles = ["Индивидуальный подход", "Честные сроки", "Прозрачный процесс", "Результат"];

export default function AboutPage() {
  return <><Header active="Обо мне" /><main className="page-shell page-grid border-x border-[var(--line)] px-4 py-8 md:px-6 md:py-10">
    <section className="about-head grid gap-8 border-b border-[var(--line)] pb-10 lg:grid-cols-[minmax(0,0.74fr)_minmax(320px,0.48fr)]"><div><p className="mono mb-7 text-[var(--muted)]">04. About / services</p><h1 className="display case-title">Что я<br />делаю</h1></div><p className="copy self-end text-[var(--muted)]">Помогаю бизнесам и основателям превращать идеи в работающие веб-продукты: от структуры и интерфейса до разработки и запуска.</p></section>
    <section className="section"><SectionLabel index="01" title="Направления" /><div className="grid gap-3">{services.map((service) => <article className="about-service grid min-w-0 gap-5 border border-[var(--line)] bg-[var(--panel)] p-4 lg:grid-cols-[58px_minmax(0,0.88fr)_minmax(240px,0.62fr)_34px] lg:items-center" key={service.title}><span className="mono text-[var(--muted)]">[{service.meta}]</span><h2 className="display direction-title">{service.title}</h2><p className="copy text-[var(--muted)]">{service.text}</p><span className="technical-plus hidden h-10 lg:block" /></article>)}</div></section>
    <section className="section about-approach grid gap-7 border-t border-[var(--line)] pt-10 lg:grid-cols-[150px_minmax(0,1fr)]"><p className="mono text-[var(--paper)]">02. Подход</p><p className="copy-lg max-w-5xl text-[var(--muted)]">Я не разделяю сайт на красивую картинку и техническую часть. Для меня это одна система: смысл, сетка, код, скорость, адаптив и путь человека до нужного действия.</p></section>
    <section className="grid gap-3 pb-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1fr)]"><div className="panel p-5"><p className="mono text-[var(--muted)]">03. Инструменты</p><h2 className="display mt-8 text-[clamp(1.9rem,3.1vw,3.8rem)]">Код — часть<br />дизайна</h2><p className="copy mt-6 text-[var(--muted)]">Работаю с Next.js, React, TypeScript, API, базами данных, Git и современным CSS. Стек выбираю под задачу, а не ради списка технологий.</p></div><div className="panel p-5"><p className="mono text-[var(--muted)]">04. Для кого</p><div className="mt-8 grid gap-5 sm:grid-cols-2"><div><p className="mono text-[var(--paper)]">Бренды</p><p className="copy mt-3 text-[var(--muted)]">Когда нужен сайт, который объясняет ценность и собирает заявки.</p></div><div><p className="mono text-[var(--paper)]">Продукты</p><p className="copy mt-3 text-[var(--muted)]">Когда интерфейс должен стать понятнее команде и пользователю.</p></div><div><p className="mono text-[var(--paper)]">Основатели</p><p className="copy mt-3 text-[var(--muted)]">Когда идею нужно быстро превратить в работающий первый релиз.</p></div><div><p className="mono text-[var(--paper)]">Команды</p><p className="copy mt-3 text-[var(--muted)]">Когда не хватает человека, который соединит дизайн и разработку.</p></div></div></div></section>
    <section className="grid gap-3 pb-10 md:grid-cols-4">{principles.map((item) => <div className="panel p-4" key={item}><p className="mono text-[var(--paper)]">{item}</p></div>)}</section>
  </main><Footer /></>;
}
