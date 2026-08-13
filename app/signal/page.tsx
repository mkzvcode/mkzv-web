import type { Metadata } from "next";
import { ArtworkSlot } from "@/components/ArtworkSlot";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Signal | MKZV WEB",
  description: "Музыкальная сторона MKZV: биты, шум и звуковые эксперименты — отдельный слой личного языка.",
};

const tracks = [["01", "Static Flow", "04:12"], ["02", "System Drift", "05:03"], ["03", "White Pressure", "03:47"], ["04", "Collapse Point", "06:11"]];

export default function SignalPage() {
  return <><Header active="Signal" /><main className="page-shell page-grid border-x border-[var(--line)] px-4 py-8 md:px-6 md:py-10">
    <section className="signal-hero relative overflow-hidden border-b border-[var(--line)] pb-8"><ArtworkSlot className="signal-sphere" wide /><div className="relative z-10 grid gap-8 xl:grid-cols-[minmax(0,0.78fr)_minmax(320px,0.5fr)]"><div><p className="mono mb-7 text-[var(--muted)]">05. Signal / music / noise</p><h1 className="display signal-title">Signal<br />Noise in<br />the system</h1><p className="copy mt-7 max-w-md text-[var(--muted)]">Музыка, биты и шум — часть визуального языка. Это отдельная точка входа в музыкальную сторону проекта.</p></div><p className="mono self-end leading-6 text-[var(--muted)]">// Frequencies 44.1 kHz<br />// Mode: live loop<br />// Signal: active</p></div></section>
    <section className="py-8"><div className="grid gap-3">{tracks.map(([id, title, time]) => <div className="signal-track grid min-w-0 grid-cols-[36px_minmax(0,1fr)] items-center gap-x-3 gap-y-3 border border-[var(--line)] bg-[var(--panel)] p-3 sm:grid-cols-[42px_minmax(0,1fr)_76px] xl:grid-cols-[42px_minmax(0,1fr)_76px_minmax(160px,0.55fr)_104px]" key={title}><span className="mono text-[var(--muted)]">{id}</span><span className="mono min-w-0 text-[var(--paper)]">{title}</span><span className="mono text-[var(--muted)] sm:col-start-3 xl:col-auto">{time}</span><span className="signal-wave col-span-2 sm:col-span-3 xl:col-auto" /><button className="thin-button signal-listen col-span-2 min-h-10 sm:col-span-3 xl:col-auto" type="button">Слушать <span aria-hidden="true">→</span></button></div>)}</div><div className="mt-4 grid gap-3 sm:grid-cols-2"><button className="thin-button" type="button">Слушать все треки <span aria-hidden="true">→</span></button><a className="thin-button" href="/contacts">Связаться <span aria-hidden="true">→</span></a></div></section>
    <section className="grid gap-3 border-t border-[var(--line)] py-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]"><div className="panel p-5"><p className="mono text-[var(--muted)]">Signal / note</p><h2 className="display mt-8 text-[clamp(1.9rem,3.2vw,3.8rem)]">Шум — тоже<br />система</h2></div><div className="panel p-5"><p className="copy-lg text-[var(--muted)]">Signal — личная музыкальная сторона MKZV. Здесь появляются биты, звуковые этюды и эксперименты с текстурой. Это не музыкальный магазин: страница нужна, чтобы показать ещё один слой моего языка.</p><div className="mt-8 grid gap-4 sm:grid-cols-2"><p className="mono leading-5 text-[var(--paper)]">GENRE<br /><span className="text-[var(--muted)]">Noise / industrial / metal</span></p><p className="mono leading-5 text-[var(--paper)]">STATUS<br /><span className="text-[var(--muted)]">Новые фрагменты — скоро</span></p></div></div></section>
  </main><Footer /></>;
}
