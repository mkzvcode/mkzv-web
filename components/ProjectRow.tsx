import Link from "next/link";
import type { Project } from "@/data/projects";

type ProjectRowProps = { project: Project; href?: string };

export function ProjectRow({ project, href = "/projects/case-01" }: ProjectRowProps) {
  return (
    <Link className="project-card project-row grid min-w-0 gap-5 border border-[var(--line)] bg-[var(--panel)] p-4 lg:grid-cols-[86px_minmax(0,1fr)_minmax(240px,0.74fr)] lg:items-center lg:p-5" href={href}>
      <span aria-hidden="true" className="project-row-index display">{project.id}</span>
      <div className="min-w-0">
        <p className="mono mb-3 text-[var(--muted)]">/ {project.kind}</p>
        <h3 className="display project-row-title">{project.title}</h3>
        <div className="mt-5 grid min-w-0 gap-4 text-[var(--muted)] md:grid-cols-3">
          <p className="copy"><span className="mono block text-[var(--paper)]">Роль</span>{project.role}</p>
          <p className="copy"><span className="mono block text-[var(--paper)]">Стек</span>{project.stack}</p>
          <p className="copy"><span className="mono block text-[var(--paper)]">Результат</span>{project.result}</p>
        </div>
      </div>
      <div className="texture-frame min-h-36 border border-[var(--line)] lg:min-h-40" />
    </Link>
  );
}
