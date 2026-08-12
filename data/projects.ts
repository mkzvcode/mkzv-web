export type Project = {
  id: string;
  title: string;
  kind: string;
  role: string;
  stack: string;
  result: string;
  description: string;
};

export const projects: Project[] = [
  { id: "01", title: "Сайт для бренда", kind: "Корпоративный сайт", role: "Дизайн-система, frontend, запуск", stack: "Next.js, TypeScript, Tailwind", result: "Рост доверия и понятный путь к заявке", description: "Минималистичный сайт для бренда, где визуальная подача не спорит с бизнес-задачей." },
  { id: "02", title: "Веб-сервис", kind: "Продуктовый интерфейс", role: "Архитектура, интерфейс, интеграции", stack: "React, Node.js, PostgreSQL", result: "Логичный сценарий и чистая продуктовая логика", description: "Сервисная логика, собранная в спокойный интерфейс без лишнего визуального шума." },
  { id: "03", title: "Интерфейс продукта", kind: "UI / UX", role: "Прототип, UI, frontend", stack: "TypeScript, API, дизайн-система", result: "Внятная структура и меньше лишних действий", description: "Пересборка интерфейса, чтобы команда и пользователи быстрее понимали продукт." },
];

export const processSteps = ["Анализ", "Структура", "Дизайн", "Разработка", "Тесты", "Запуск"];

export const metrics = [
  { value: "+64%", label: "рост конверсии" },
  { value: "2.4x", label: "рост заявок" },
  { value: "98", label: "pagespeed" },
  { value: "100%", label: "seo health" },
];

export const services = [
  { title: "Сайты", text: "Лендинги, корпоративные сайты и многостраничные портфолио под конкретную задачу.", meta: "01" },
  { title: "Интерфейсы", text: "Прототипы, UI-системы, панели и продуктовые сценарии без хаоса на экране.", meta: "02" },
  { title: "Full-stack", text: "Frontend, backend, API, базы данных и интеграции в одной рабочей связке.", meta: "03" },
  { title: "Запуск", text: "Деплой, оптимизация, SEO-основа, аналитика и подготовка к росту.", meta: "04" },
];
