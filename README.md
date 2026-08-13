# MKZV WEB

Коммерческое портфолио full-stack разработчика и веб-дизайнера Максима. Сайт продаёт услуги разработки сайтов под ключ: структура, дизайн, frontend, формы, SEO-основа и запуск. Визуально проект держится на тёмной минималистичной стилистике, шумовой графике, крупной типографике Benzin и отдельной странице `Signal` для музыкальной/нойз-части.

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
- `/projects/case-01` - демонстрационный кейс
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

Продуктовая версия готова: страницы, адаптив, продающая структура, демонстрационные кейсы, блоки доверия, форматы услуг, шумовая сфера и стартовые анимации уже внедрены. Дальше можно подключать финальные медиа, реальные кейсы и Telegram-форму заявки.
