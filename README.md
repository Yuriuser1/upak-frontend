
# UPAK Frontend

🚀 **Продающие карточки для маркетплейсов с помощью AI** - современный frontend для UPAK платформы, созданный с использованием Next.js 14 и React 18.

## 📋 Описание проекта

UPAK Frontend - это современный веб-интерфейс для создания продающих карточек товаров для маркетплейсов (Wildberries, Ozon и других) с использованием искусственного интеллекта. Проект обеспечивает интуитивный пользовательский интерфейс для быстрого создания профессиональных карточек за считанные минуты.

### ✨ Основные возможности

- **AI-генерация контента** - автоматическое создание описаний и ключевых слов
- **Обработка изображений** - оптимизация и улучшение фотографий товаров
- **Мультиплатформенность** - поддержка всех основных маркетплейсов
- **Быстрое создание** - готовые карточки за 5 минут
- **24/7 поддержка** - круглосуточная техническая поддержка
- **Telegram интеграция** - возможность работы через бот

### 🛠 Технологический стек

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + Shadcn/ui
- **Animation:** Framer Motion
- **State Management:** Zustand, Jotai
- **Forms:** React Hook Form + Zod validation
- **Database:** Prisma ORM
- **Authentication:** NextAuth.js v4
- **UI Components:** Radix UI primitives
- **Icons:** Lucide React
- **Charts:** Chart.js, Recharts, Plotly.js

## 🚀 Быстрый старт

### Требования

- Node.js 18.17+ 
- Yarn или npm
- Docker (опционально)

### Локальная установка

1. **Клонируйте репозиторий**
```bash
git clone <repository-url>
cd upak_frontend
```

2. **Перейдите в директорию приложения**
```bash
cd app
```

3. **Установите зависимости**
```bash
yarn install
# или
npm install
```

4. **Настройте переменные окружения**
```bash
cp .env.example .env.local
```
Отредактируйте `.env.local` согласно вашим настройкам.

5. **Настройте базу данных**
```bash
yarn prisma generate
yarn prisma db push
# Заполните тестовыми данными (опционально)
yarn prisma db seed
```

6. **Запустите приложение в режиме разработки**
```bash
yarn dev
```

Приложение будет доступно по адресу: `http://localhost:3000`

### 🐳 Запуск с Docker

1. **Development окружение**
```bash
docker-compose up -d
```

2. **Production окружение**
```bash
docker-compose -f docker-compose.prod.yml up -d
```

## 📁 Структура проекта

```
upak_frontend/
├── app/                          # Основная директория Next.js приложения
│   ├── app/                      # App Router директория
│   │   ├── api/                  # API routes
│   │   ├── globals.css          # Глобальные стили
│   │   ├── layout.tsx           # Корневой layout
│   │   └── page.tsx            # Главная страница
│   ├── components/              # React компоненты
│   │   ├── ui/                  # UI компоненты (Shadcn/ui)
│   │   ├── header.tsx           # Заголовок сайта
│   │   ├── hero.tsx            # Главный баннер
│   │   ├── services.tsx        # Раздел услуг
│   │   ├── pricing.tsx         # Тарифы
│   │   ├── reviews.tsx         # Отзывы
│   │   └── ...                 # Другие компоненты
│   ├── lib/                     # Утилиты и конфигурации
│   ├── hooks/                   # Custom React hooks
│   ├── prisma/                  # Prisma схемы и миграции
│   ├── public/                  # Статические файлы
│   └── ...
├── scripts/                     # Скрипты для автоматизации
├── .github/                     # GitHub Actions workflows
├── Dockerfile                   # Docker конфигурация
├── docker-compose.yml           # Development окружение
├── docker-compose.prod.yml      # Production окружение
└── README.md                    # Документация
```

## ⚙️ Переменные окружения

Создайте файл `.env.local` на основе `.env.example`:

```bash
# Приложение
NEXT_PUBLIC_APP_URL=http://localhost:3000
NODE_ENV=development

# База данных
DATABASE_URL="postgresql://username:password@localhost:5432/upak_db"

# NextAuth.js
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key

# API интеграция
UPAK_API_URL=https://api.upak.space
UPAK_API_KEY=your-api-key

# Telegram Bot (опционально)
TELEGRAM_BOT_TOKEN=your-telegram-bot-token

# AI сервис (опционально)
YANDEX_GPT_API_KEY=your-yandex-gpt-key
```

## 🚀 Деплой

### Vercel (Рекомендуется)

1. Подключите репозиторий к Vercel
2. Настройте переменные окружения
3. Выберите директорию `app` как root directory
4. Деплой произойдет автоматически

### Docker Production

```bash
# Сборка production образа
docker build -t upak-frontend:latest .

# Запуск production контейнера
docker-compose -f docker-compose.prod.yml up -d
```

### Традиционный хостинг

```bash
# Сборка production версии
cd app
yarn build

# Запуск production сервера
yarn start
```

## 🧪 Тестирование

```bash
# Запуск тестов
yarn test

# Запуск тестов в watch режиме
yarn test:watch

# Генерация coverage отчета
yarn test:coverage

# E2E тесты
yarn test:e2e

# Lighthouse аудит
yarn audit
```

## 📝 Скрипты

```bash
# Разработка
yarn dev              # Запуск dev сервера
yarn build             # Сборка production версии
yarn start             # Запуск production сервера
yarn lint              # Линтинг кода
yarn type-check        # Проверка типов TypeScript

# База данных
yarn db:generate       # Генерация Prisma клиента
yarn db:push           # Применение изменений схемы
yarn db:seed           # Заполнение тестовыми данными
yarn db:studio         # Запуск Prisma Studio
yarn db:migrate        # Создание миграции

# Инструменты
yarn format            # Форматирование кода (Prettier)
yarn audit             # Аудит безопасности
yarn analyze           # Анализ bundle размера
```

## 🏗 Архитектура

### Компонентная архитектура

- **Server Components** - по умолчанию для оптимальной производительности
- **Client Components** - только когда необходимы React hooks или интерактивность
- **UI Components** - переиспользуемые компоненты на основе Radix UI
- **Layout Components** - компоненты макета и структуры страницы

### State Management

- **Zustand** - для глобального состояния приложения
- **Jotai** - для атомарного управления состоянием
- **React Hook Form** - для управления формами
- **SWR** - для кеширования API запросов

### Стилизация

- **Tailwind CSS** - utility-first CSS framework
- **CSS-in-JS** - через Tailwind и CSS modules
- **Темизация** - поддержка светлой/темной темы
- **Адаптивность** - mobile-first подход

## 🔧 API интеграция

### UPAK Backend API

Приложение интегрируется с основным UPAK API для:

- Создания и управления карточками товаров
- AI-генерации контента
- Обработки изображений
- Управления пользователями

### Endpoint примеры

```typescript
// Создание карточки
POST /api/cards/create
{
  "productName": "Название товара",
  "description": "Описание",
  "images": ["url1", "url2"],
  "marketplace": "wildberries"
}

// Получение статуса карточки
GET /api/cards/{id}/status

// AI-генерация описания
POST /api/ai/generate-description
{
  "productInfo": {...},
  "marketplace": "ozon"
}
```

## 🔒 Безопасность

- **NextAuth.js** - аутентификация и авторизация
- **CSRF Protection** - защита от CSRF атак
- **Rate Limiting** - ограничение частоты запросов
- **Input Validation** - валидация с помощью Zod
- **Environment Variables** - безопасное хранение секретов

## 📊 Мониторинг и аналитика

- **Performance Monitoring** - через Next.js Analytics
- **Error Tracking** - интеграция с Sentry (опционально)
- **User Analytics** - Google Analytics 4 (опционально)
- **Core Web Vitals** - мониторинг производительности

## 🤝 Вклад в проект

1. Fork репозитория
2. Создайте feature branch (`git checkout -b feature/amazing-feature`)
3. Commit изменения (`git commit -m 'Add some amazing feature'`)
4. Push в branch (`git push origin feature/amazing-feature`)
5. Откройте Pull Request

### Стандарты кода

- **ESLint + Prettier** - для консистентности кода
- **TypeScript** - строгая типизация
- **Conventional Commits** - стандарт коммитов
- **Husky** - pre-commit hooks

## 📞 Поддержка

- **Документация**: [docs.upak.space](https://docs.upak.space)
- **Telegram**: [@upak_support](https://t.me/upak_support)
- **Email**: support@upak.space
- **GitHub Issues**: для отчетов об ошибках

## 📄 Лицензия

Этот проект лицензирован под MIT License - см. [LICENSE](LICENSE) файл для подробностей.

## 🙏 Благодарности

- [Next.js](https://nextjs.org/) - за отличный React framework
- [Tailwind CSS](https://tailwindcss.com/) - за utility-first CSS
- [Shadcn/ui](https://ui.shadcn.com/) - за красивые UI компоненты
- [Vercel](https://vercel.com/) - за hosting и deployment решения

---

**Создано с ❤️ командой UPAK**

**Версия**: 1.0.0
**Последнее обновление**: Август 2025
