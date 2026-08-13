# MKZV WEB

Портфолио full-stack разработчика и веб-дизайнера Максима. Сайт собран в темной минималистичной стилистике с шумовой графикой, крупной типографикой Benzin и отдельной страницей `Signal` для музыкальной/нойз-части проекта.

## Ссылки

- Production: https://mkzv-web.pages.dev
- Repository: https://github.com/mkzvcode/mkzv-web

## Стек

- Next.js
- TypeScript
- Tailwind CSS
- CSS Modules
- Custom local font: Benzin
- Static export for Cloudflare Pages

## Страницы

- `/` - главная страница MKZV WEB
- `/projects` - избранные проекты
- `/projects/case-01` - первый кейс-заглушка
- `/about` - обо мне и услугах
- `/signal` - музыкальный side project
- `/contacts` - контакты и ссылки
- `404` - страница ошибки

## Локальный запуск

```bash
npm install
npm run dev
```

Сайт откроется на `http://localhost:3000`.

## Production build

```bash
npm run build
```

Проект настроен на статический экспорт через `output: "export"` в `next.config.ts`. После сборки готовая версия лежит в папке `out`.

## Cloudflare Pages

Для деплоя на Cloudflare Pages:

- Build command: `npm run build`
- Output directory: `out`
- Production URL: `https://mkzv-web.pages.dev`

## Статус

Базовая продуктовая версия готова: страницы, адаптив, темная дизайн-система, заглушки проектов, шумовая сфера и стартовые анимации уже внедрены. Дальше можно подключать финальные медиа, реальные кейсы и Telegram-форму заявки.
