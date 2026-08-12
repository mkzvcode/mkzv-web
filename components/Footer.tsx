import Link from "next/link";

export function Footer() {
  return (
    <footer className="page-shell border-x border-t border-[var(--line)] px-4 py-7 md:px-6">
      <div className="grid gap-5 text-[var(--muted)] md:grid-cols-4">
        <p className="mono">© MKZV WEB 2026</p>
        <p className="mono">Full-stack разработчик и веб-дизайнер</p>
        <p className="mono">Россия / удалённо</p>
        <Link className="footer-cta mono text-[var(--paper)]" href="/contacts">Собрать проект →</Link>
      </div>
    </footer>
  );
}
