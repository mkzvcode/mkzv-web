"use client";

import { useEffect, useRef } from "react";
import styles from "./ArtworkSlot.module.css";

type ArtworkSlotProps = {
  label?: string;
  wide?: boolean;
  className?: string;
};

export function ArtworkSlot({ wide = false, className = "" }: ArtworkSlotProps) {
  const slotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slot = slotRef.current;
    if (!slot || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = slot.getBoundingClientRect();
      const progress = Math.max(-1, Math.min(1, (rect.top + rect.height / 2 - window.innerHeight / 2) / window.innerHeight));
      slot.style.setProperty("--sphere-y", `${progress * -18}px`);
      slot.style.setProperty("--sphere-scale", `${1.08 - Math.abs(progress) * 0.05}`);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      removeEventListener("scroll", onScroll);
      removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div aria-hidden="true" className={`${styles.slot} ${wide ? styles.wide : ""} ${className}`} ref={slotRef}>
      <video autoPlay className={styles.video} loop muted playsInline poster="/images/noise-sphere-placeholder.jpg" preload="metadata">
        <source src="/media/noise-sphere-loop.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
