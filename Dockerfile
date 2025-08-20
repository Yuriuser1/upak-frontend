
# =================================================================
# UPAK Frontend - Production Docker Image
# =================================================================

# Используем официальный Node.js образ с Alpine для минимального размера
FROM node:18-alpine AS base

# Установка зависимостей системы
RUN apk add --no-cache libc6-compat
WORKDIR /app

# =================================================================
# Установка зависимостей
# =================================================================
FROM base AS deps

# Копируем package.json и yarn.lock
COPY app/package.json app/yarn.lock* ./

# Устанавливаем зависимости
RUN \
  if [ -f yarn.lock ]; then yarn install --frozen-lockfile --production; \
  elif [ -f package-lock.json ]; then npm ci --only=production; \
  else npm install --only=production; \
  fi

# =================================================================
# Сборка приложения
# =================================================================
FROM base AS builder

WORKDIR /app

# Копируем зависимости из предыдущего stage
COPY --from=deps /app/node_modules ./node_modules

# Копируем исходный код
COPY app/ ./

# Устанавливаем dev зависимости для сборки
RUN \
  if [ -f yarn.lock ]; then yarn install --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  else npm install; \
  fi

# Генерируем Prisma клиент
RUN npx prisma generate

# Переменные окружения для сборки
ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV production

# Сборка приложения
RUN \
  if [ -f yarn.lock ]; then yarn build; \
  elif [ -f package-lock.json ]; then npm run build; \
  else npm run build; \
  fi

# =================================================================
# Production образ
# =================================================================
FROM base AS runner

WORKDIR /app

# Создаем пользователя для безопасности
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Копируем необходимые файлы
COPY --from=builder /app/public ./public

# Настраиваем права для prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Копируем собранное приложение
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Копируем prisma schema для production
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma

# Production переменные окружения
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

# Переключаемся на непривилегированного пользователя
USER nextjs

# Открываем порт
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3000/api/health || exit 1

# Запуск приложения
CMD ["node", "server.js"]
