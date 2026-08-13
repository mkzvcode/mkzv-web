import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ProjectRow } from "@/components/ProjectRow";
import { SectionLabel } from "@/components/SectionLabel";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Проекты | MKZV WEB",
  description: "Каталог работ: сайты, сервисы и интерфейсы, где дизайн, код и логика собраны в одно решение.",
};

export default function ProjectsPage() {
  return (
    <>
      <Header active="Проекты" />
      <main className="page-shell page-grid border-x border-[var(--line)] px-4 py-8 md:px-6 md:py-10">
        <section className="project-index-head grid gap-7 border-b border-[var(--line)] pb-9 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.45fr)]">
          <div>
            <p className="mono mb-6 text-[var(--muted)]">02. Projects / selected work</p>
            <h1 className="display case-title max-w-5xl">Работы под<br />задачу</h1>
          </div>
          <p className="copy self-end text-[var(--muted)]">
            Здесь собраны форматы, которые чаще всего покупают: сайт для услуги, лендинг под рекламу и интерфейс продукта.
            Сейчас это честные демонстрационные кейсы: они показывают подход, структуру и то, как будет упакована реальная работа.
          </p>
        </section>

        <section className="section project-catalog">
          <SectionLabel index="01" title="Каталог" />
          <div className="grid gap-3">{projects.map((project) => <ProjectRow key={project.id} project={project} />)}</div>
        </section>

        <section className="section project-request grid gap-7 border-t border-[var(--line)] pt-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]">
          <h2 className="display case-card-title">Нужен другой формат?</h2>
          <p className="copy-lg text-[var(--muted)]">
            Можно собрать сайт эксперта, страницу услуги, каталог, личное портфолио, сервис или связку frontend + backend.
            Начинаем не с количества страниц, а с задачи: что продаём, кому, через какие блоки доверия и какой следующий шаг нужен.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
