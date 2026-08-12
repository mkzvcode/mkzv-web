import "./globals.css";
import type { Metadata } from "next";
import { ScrollMotion } from "@/components/ScrollMotion";

export const metadata: Metadata = {
  title: "MKZV WEB | Full-stack разработка",
  description: "Портфолио MKZV WEB: сайты, сервисы и интерфейсы — от дизайна до запуска.",
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
