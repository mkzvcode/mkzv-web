import "./globals.css";
import type { Metadata } from "next";
import { ScrollMotion } from "@/components/ScrollMotion";

export const metadata: Metadata = {
  metadataBase: new URL("https://mkzv-web.pages.dev"),
  title: "MKZV WEB | Сайты под ключ, дизайн и full-stack разработка",
  description: "Сайты для услуг, брендов и экспертов: структура, дизайн, frontend, формы, SEO-основа и запуск.",
  openGraph: {
    title: "MKZV WEB",
    description: "Авторские сайты, которые объясняют услугу и ведут человека к заявке.",
    locale: "ru_RU",
    siteName: "MKZV WEB",
    type: "website",
    url: "https://mkzv-web.pages.dev",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>
        {children}
        <ScrollMotion />
      </body>
    </html>
  );
}
