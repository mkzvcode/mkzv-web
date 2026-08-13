"use client";

import Link from "next/link";
import { useState } from "react";

const nav = [
  { href: "/projects", label: "Проекты" },
  { href: "/about", label: "Обо мне" },
  { href: "/signal", label: "Signal" },
  { href: "/contacts", label: "Контакты" },
];

type HeaderProps = { active?: string };

export function Header({ active }: HeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header page-shell sticky top-0 z-20 border-x border-b border-[var(--line)] bg-[rgba(18,18,17,0.9)] backdrop-blur-md">
      <div className="grid min-h-16 grid-cols-[1fr_auto] items-center gap-4 px-4 lg:grid-cols-[1fr_auto_48px] lg:px-6">
        <Link className="brand-link mono text-[var(--paper)]" href="/" onClick={() => setOpen(false)}>MKZV WEB</Link>
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
        <button
          aria-controls="mobile-nav"
          aria-expanded={open}
          className="nav-link mono justify-self-end lg:hidden"
          onClick={() => setOpen((v) => !v)}
          type="button"
        >
          {open ? "Закрыть" : "Меню"}
        </button>
      </div>

      {/* Мобильное меню: те же пункты, что и в десктопной навигации.
          Раньше здесь была ссылка "Меню", которая вела прямо на /projects —
          «Обо мне» и «Контакты» были недостижимы через шапку на узких экранах. */}
      <nav
        aria-label="Мобильная навигация"
        className={`grid overflow-hidden border-t border-[var(--line)] transition-[grid-template-rows] duration-300 ease-out lg:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
        id="mobile-nav"
      >
        <div className="min-h-0">
          {nav.map((item) => (
            <Link
              aria-current={active === item.label ? "page" : undefined}
              className="mono flex min-h-14 items-center border-b border-[var(--line)] px-4 text-[var(--muted)] transition-colors last:border-b-0 hover:text-[var(--paper)] aria-[current=page]:text-[var(--paper)]"
              href={item.href}
              key={item.href}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
