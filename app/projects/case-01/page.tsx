import type { Metadata } from "next";
import Link from "next/link";
import { ArtworkSlot } from "@/components/ArtworkSlot";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { metrics, processSteps } from "@/data/projects";

export const metadata: Metadata = {
  title: "Кейс проекта | MKZV WEB",
  description: "Разбор подхода: контекст, решение, система и итог — от задачи до запуска.",
};

const caseSections = [
  ["Контекст", "Бренду нужен новый сайт: уверенный, понятный и аккуратный для человека, который впервые видит продукт."],
  ["Решение", "Собираем структуру, контент, первый экран и путь до контакта без лишней декоративности."],
  ["Система", "Главная архитектура, дизайн-сетка, компоненты, адаптив, SEO-основа и подготовка к расширению."],
  ["Итог", "Сайт становится рабочей точкой входа: объясняет, показывает уровень и приводит человека к заявке."],
];

export default function CasePage() {
  return (
    <>
      <Header active="Проекты" />
      <main className="page-shell page-grid border-x border-[var(--line)] px-4 py-8 md:px-6 md:py-10">
        <Link className="case-back mono inline-flex text-[var(--muted)]" href="/projects">← Все проекты</Link>
        <section className="case-hero relative overflow-hidden border-b border-[var(--line)] py-8">
          <ArtworkSlot className="case-sphere" wide />
          <div className="relative z-10 grid gap-7 xl:grid-cols-[minmax(0,0.72fr)_minmax(360px,0.56fr)]">
            <div className="self-end"><p className="mono mb-6 text-[var(--muted)]">03. Project case</p><h1 className="display case-title">Кейс проекта<br />От задачи до запуска</h1></div>
            <p className="copy self-end text-[var(--muted)]">Это базовая структура будущего кейса. После запуска здесь появятся скриншоты, метрики, стек, роль и результат.</p>
          </div>
        </section>

        <section className="case-analysis grid gap-7 py-9 xl:grid-cols-[210px_minmax(0,1fr)]">
          <aside><p className="mono mb-4 text-[var(--paper)]">01. Разбор</p><p className="copy text-[var(--muted)]">От контекста к решению — коротко и по делу.</p></aside>
          <div className="grid gap-3 lg:grid-cols-2">{caseSections.map(([title, text]) => <article className="case-unit panel p-5" key={title}><h2 className="display case-card-title">{title}</h2><p className="copy mt-5 text-[var(--muted)]">{text}</p></article>)}</div>
        </section>

        <section className="case-metrics border-y border-[var(--line)] py-8">
          <p className="mono mb-5 text-[var(--paper)]">02. Показатели</p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{metrics.map((metric) => <div className="panel p-4" key={metric.label}><p className="display text-[clamp(2rem,3.2vw,3.7rem)]">{metric.value}</p><p className="mono mt-5 leading-5 text-[var(--muted)]">{metric.label}</p></div>)}</div>
        </section>

        <section className="py-8">
          <p className="mono mb-5 text-[var(--paper)]">03. Процесс</p>
          <div className="case-process grid gap-3 md:grid-cols-3 xl:grid-cols-6">{processSteps.map((step, index) => <div className="panel p-4" key={step}><p className="mono text-[var(--muted)]">0{index + 1}</p><p className="display mt-8 text-[clamp(1.15rem,1.5vw,1.65rem)]">{step}</p></div>)}</div>
        </section>
      </main>
      <Footer />
    </>
  );
}
