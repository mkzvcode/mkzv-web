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
  ["Контекст", "Бизнесу нужен сайт, который выглядит уверенно и объясняет услугу человеку, пришедшему из рекламы, поиска или личной рекомендации."],
  ["Решение", "Сначала собирается оффер и сценарий: первый экран, блок доверия, услуги, кейсы, возражения, CTA и контакт. Потом дизайн и код."],
  ["Система", "Страница проектируется как основа для роста: компоненты, адаптив, SEO-база, аналитика, форма заявки и возможность добавить новые разделы."],
  ["Итог", "Посетитель быстрее понимает, что вы делаете, почему вам можно доверять и какой следующий шаг. Сайт работает как точка входа в продажу."],
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
            <div className="self-end"><p className="mono mb-6 text-[var(--muted)]">03. Project case / 01</p><h1 className="display case-title">От заявки<br />до сайта</h1></div>
            <p className="copy self-end text-[var(--muted)]">Демонстрационный кейс показывает, как я думаю о коммерческом сайте: сначала путь клиента, доверие и понятное действие, потом визуальная оболочка.</p>
          </div>
        </section>

        <section className="case-analysis grid gap-7 py-9 xl:grid-cols-[210px_minmax(0,1fr)]">
          <aside><p className="mono mb-4 text-[var(--paper)]">01. Разбор</p><p className="copy text-[var(--muted)]">Сайт продаёт сильнее, когда у него есть стиль и логика: кто пришёл, что он ищет, чему он должен поверить.</p></aside>
          <div className="grid gap-3 lg:grid-cols-2">{caseSections.map(([title, text]) => <article className="case-unit panel p-5" key={title}><h2 className="display case-card-title">{title}</h2><p className="copy mt-5 text-[var(--muted)]">{text}</p></article>)}</div>
        </section>

        <section className="case-metrics border-y border-[var(--line)] py-8">
          <p className="mono mb-5 text-[var(--paper)]">02. Показатели</p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{metrics.map((metric) => <div className="metric-tile panel" key={metric.label}><p className="display metric-value">{metric.value}</p><p className="mono metric-label">{metric.label}</p></div>)}</div>
        </section>

        <section className="py-8">
          <p className="mono mb-5 text-[var(--paper)]">03. Процесс</p>
          <div className="case-process grid gap-3 md:grid-cols-3 xl:grid-cols-6">{processSteps.map((step, index) => <div className="process-card panel p-4" data-index={`0${index + 1}`} key={step}><p className="mono text-[var(--muted)]">0{index + 1}</p><p className="display process-step-title mt-8">{step}</p></div>)}</div>
        </section>
      </main>
      <Footer />
    </>
  );
}
