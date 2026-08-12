import Link from "next/link";
import { ArtworkSlot } from "@/components/ArtworkSlot";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="page-shell page-grid border-x border-[var(--line)] px-4 py-8 md:px-6 md:py-10">
        <section className="not-found-grid grid min-h-[calc(100vh-180px)] gap-7 xl:grid-cols-[minmax(0,0.68fr)_minmax(430px,0.9fr)]">
          <div className="self-center">
            <p className="mono mb-7 text-[var(--muted)]">404 / signal lost</p>
            <h1 className="display case-title">Страница<br />не найдена</h1>
            <p className="copy mt-7 max-w-xl text-[var(--muted)]">Этот маршрут выпал из системы. Вернись на главную или перейди к проектам.</p>
            <div className="mt-8 grid max-w-lg gap-3 sm:grid-cols-2">
              <Link className="thin-button" href="/">На главную <span aria-hidden="true">→</span></Link>
              <Link className="thin-button" href="/projects">Проекты <span aria-hidden="true">→</span></Link>
            </div>
          </div>
          <ArtworkSlot wide />
        </section>
      </main>
      <Footer />
    </>
  );
}
