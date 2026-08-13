import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ProjectRow } from "@/components/ProjectRow";
import { SectionLabel } from "@/components/SectionLabel";
import { VisualPlaceholder } from "@/components/VisualPlaceholder";
import { launchChecklist, projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Проекты | MKZV WEB",
  description: "Каталог работ: сайты, сервисы и интерфейсы, где дизайн, код и логика собраны в одно решение.",
};

export default function ProjectsPage() {
  return (
    <>
      <Header active="Проекты" />
      <main className="page-shell page-grid border-x border-[var(--line)] px-4 py-8 md:px-6 md:py-10">
        <section className="project-index-head grid gap-7 border-b border-[var(--line)] pb-9 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.48fr)]">
          <div>
            <p className="mono mb-6 text-[var(--muted)]">02. Projects / selected work</p>
            <h1 className="display case-title max-w-5xl">Работы под<br />задачу</h1>
          </div>
          <VisualPlaceholder label="case wall / preview" title="Не галерея, а доказательства" variant="poster" />
        </section>

        <section className="section project-catalog">
          <SectionLabel index="01" title="Каталог" />
          <div className="visual-break mb-3 grid gap-3 lg:grid-cols-[minmax(0,0.58fr)_minmax(0,0.42fr)]">
            <VisualPlaceholder label="selected work / ui" title="Будущие скриншоты" variant="screen" />
            <VisualPlaceholder label="result graph / signal" title="Роль, стек, итог" variant="wave" />
          </div>
          <div className="grid gap-3">{projects.map((project) => <ProjectRow key={project.id} project={project} />)}</div>
        </section>

        <section className="section grid gap-3 border-t border-[var(--line)] pt-10 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,1fr)]">
          <div>
            <p className="mono text-[var(--muted)]">02. What is inside</p>
            <h2 className="display mt-8 case-card-title">Что будет<br />в реальном кейсе</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {launchChecklist.slice(0, 8).map((item) => <p className="check-chip mono panel p-4 text-[var(--paper)]" key={item}>{item}</p>)}
          </div>
        </section>

        <section className="section project-request grid gap-7 border-t border-[var(--line)] pt-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]">
          <h2 className="display case-card-title">Нужен другой формат?</h2>
          <p className="copy-lg text-[var(--muted)]">
            Окей. Начнём с задачи: что продаём, кому и какой шаг ждём от человека.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
