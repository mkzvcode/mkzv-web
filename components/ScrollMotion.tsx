"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

type RevealDirection = "left" | "right" | "up";

export function ScrollMotion() {
  const pathname = usePathname();

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const root = document.documentElement;

    if (reduceMotion.matches) return;

    root.classList.add("scroll-motion-ready");

    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("main > section"),
    ).slice(1);
    const cards = Array.from(
      document.querySelectorAll<HTMLElement>(
        "main .service-card, main .project-card, main .process-card, main .audience-card, main .market-card, main .deliverable-card, main .faq-card, main .route-card, main .metric-tile, main .visual-card, main .tgpt-panel, main article.panel, main form.panel, main section article:not(.panel), main .signal-track, main .contact-link",
      ),
    );

    const targets = Array.from(new Set([...sections, ...cards]));

    targets.forEach((target, index) => {
      const direction: RevealDirection =
        target.matches("main > section")
          ? index % 2 === 0
            ? "left"
            : "right"
          : index % 3 === 0
            ? "left"
            : index % 3 === 1
              ? "right"
              : "up";

      target.dataset.scrollReveal = direction;
      target.style.setProperty("--reveal-delay", `${(index % 4) * 45}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -7%", threshold: 0.1 },
    );

    targets.forEach((target) => observer.observe(target));

    return () => {
      observer.disconnect();
      root.classList.remove("scroll-motion-ready");
    };
  }, [pathname]);

  return null;
}
