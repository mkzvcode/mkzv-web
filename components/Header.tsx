import Link from "next/link";

const nav = [
  { href: "/projects", label: "Проекты" },
  { href: "/about", label: "Обо мне" },
  { href: "/signal", label: "Signal" },
  { href: "/contacts", label: "Контакты" },
];

type HeaderProps = { active?: string };

export function Header({ active }: HeaderProps) {
  return (
    <header className="site-header page-shell sticky top-0 z-20 border-x border-b border-[var(--line)] bg-[rgba(18,18,17,0.9)] backdrop-blur-md">
      <div className="grid min-h-16 grid-cols-[1fr_auto] items-center gap-4 px-4 lg:grid-cols-[1fr_auto_48px] lg:px-6">
        <Link className="brand-link mono text-[var(--paper)]" href="/">MKZV WEB</Link>
        <nav aria-label="Основная навигация" className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <Link
              aria-current={active === item.label ? "page" : undefined}
              className="nav-link mono text-[var(--muted)] transition-colors hover:text-[var(--paper)] aria-[current=page]:text-[var(--paper)]"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="technical-plus hidden h-12 border-l border-[var(--line)] lg:block" />
        <Link className="nav-link mono justify-self-end lg:hidden" href="/projects">Меню</Link>
      </div>
    </header>
  );
}
