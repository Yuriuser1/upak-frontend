
# Руководство по участию в разработке UPAK Frontend

Спасибо за ваш интерес к участию в развитии UPAK Frontend! 🎉

## 📋 Содержание

- [Кодекс поведения](#кодекс-поведения)
- [Как помочь проекту](#как-помочь-проекту)
- [Настройка окружения](#настройка-окружения)
- [Процесс разработки](#процесс-разработки)
- [Стандарты кода](#стандарты-кода)
- [Тестирование](#тестирование)
- [Отправка изменений](#отправка-изменений)
- [Обратная связь](#обратная-связь)

## Кодекс поведения

Этот проект придерживается принципов открытости, уважения и инклюзивности. Мы ожидаем, что все участники будут:

- 🤝 Проявлять уважение к другим участникам
- 💬 Быть конструктивными в обратной связи
- 🌍 Приветствовать людей всех уровней опыта
- 🎯 Фокусироваться на том, что лучше для сообщества
- 📚 Помогать другим учиться и расти

## Как помочь проекту

### 🐛 Сообщение об ошибках

1. Проверьте, нет ли уже созданного issue для этой проблемы
2. Создайте новое issue с подробным описанием:
   - Шаги для воспроизведения
   - Ожидаемое поведение
   - Фактическое поведение
   - Версия браузера/Node.js
   - Скриншоты (если применимо)

### ✨ Предложение новых функций

1. Проверьте существующие issues и discussions
2. Создайте issue с тегом `enhancement`:
   - Описание функции
   - Обоснование необходимости
   - Примеры использования
   - Возможные альтернативы

### 🚀 Улучшение документации

- Исправление опечаток
- Улучшение примеров кода
- Добавление новых руководств
- Перевод документации

### 💻 Разработка кода

- Исправление багов
- Реализация новых функций
- Оптимизация производительности
- Улучшение доступности

## Настройка окружения

### Требования

- Node.js 18.17+
- Yarn
- Git
- Docker (опционально)

### Установка

1. **Fork репозитория**
   ```bash
   # Через GitHub UI или
   gh repo fork upak/frontend
   ```

2. **Клонирование**
   ```bash
   git clone https://github.com/YOUR_USERNAME/upak-frontend.git
   cd upak-frontend
   ```

3. **Установка зависимостей**
   ```bash
   cd app
   yarn install
   ```

4. **Настройка переменных окружения**
   ```bash
   cp ../.env.example .env.local
   # Отредактируйте .env.local
   ```

5. **Запуск в режиме разработки**
   ```bash
   yarn dev
   ```

### Полезные команды

```bash
# Тестирование
yarn test                 # Запуск тестов
yarn test:watch           # Тесты в watch режиме
yarn test:coverage        # Тесты с coverage

# Качество кода
yarn lint                 # ESLint проверка
yarn lint:fix             # Автоисправление ESLint
yarn type-check           # TypeScript проверка
yarn format               # Форматирование Prettier

# База данных
yarn db:generate          # Генерация Prisma клиента
yarn db:push              # Применение схемы к БД
yarn db:studio            # Prisma Studio

# Docker
yarn docker:dev           # Запуск в Docker
yarn health-check         # Проверка состояния
```

## Процесс разработки

### 1. Создание ветки

```bash
# Обновите main ветку
git checkout main
git pull upstream main

# Создайте ветку для задачи
git checkout -b feature/awesome-feature
# или
git checkout -b fix/bug-description
```

### 2. Именование веток

- `feature/название-функции` - новые функции
- `fix/описание-бага` - исправления
- `docs/описание-изменений` - документация
- `refactor/описание-рефакторинга` - рефакторинг
- `test/описание-тестов` - тесты
- `chore/описание-задачи` - технические задачи

### 3. Разработка

1. Сделайте изменения
2. Проверьте качество кода:
   ```bash
   yarn lint
   yarn type-check
   yarn test
   ```
3. Добавьте тесты для новой функциональности
4. Обновите документацию при необходимости

### 4. Коммиты

Используйте [Conventional Commits](https://www.conventionalcommits.org/):

```bash
# Примеры хороших коммитов
git commit -m "feat: add user authentication"
git commit -m "fix: resolve navigation bug on mobile"
git commit -m "docs: update README with Docker instructions"
git commit -m "test: add tests for hero component"
git commit -m "refactor: improve error handling"
```

Префиксы:
- `feat:` - новые функции
- `fix:` - исправления багов
- `docs:` - документация
- `style:` - форматирование кода
- `refactor:` - рефакторинг
- `test:` - тесты
- `chore:` - технические задачи

## Стандарты кода

### TypeScript

- Используйте строгую типизацию
- Избегайте `any`, используйте конкретные типы
- Создавайте интерфейсы для сложных объектов

```typescript
// ✅ Хорошо
interface UserData {
  id: string
  name: string
  email: string
  createdAt: Date
}

// ❌ Плохо
const userData: any = { ... }
```

### React компоненты

- Используйте функциональные компоненты
- Применяйте хуки правильно
- Добавляйте `'use client'` только когда необходимо

```typescript
// ✅ Хорошо - Server Component
interface HeroProps {
  title: string
  description: string
}

export default function Hero({ title, description }: HeroProps) {
  return (
    <section>
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
  )
}

// ✅ Хорошо - Client Component
'use client'

export default function InteractiveButton() {
  const [count, setCount] = useState(0)
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  )
}
```

### Стилизация

- Используйте Tailwind CSS
- Группируйте классы логически
- Используйте компоненты Shadcn/ui

```tsx
// ✅ Хорошо
<div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md">
  <h2 className="text-xl font-semibold text-gray-900">Title</h2>
  <Button variant="outline" size="sm">Action</Button>
</div>
```

### API Routes

- Обрабатывайте ошибки корректно
- Валидируйте входные данные
- Используйте типизированные ответы

```typescript
// ✅ Хорошо
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Валидация
    const validatedData = schema.parse(body)
    
    // Логика
    const result = await processData(validatedData)
    
    return NextResponse.json({ success: true, data: result })
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}
```

## Тестирование

### Unit тесты

```typescript
// hero.test.tsx
import { render, screen } from '@testing-library/react'
import Hero from '@/components/hero'

describe('Hero Component', () => {
  it('renders title and description', () => {
    render(<Hero title="Test Title" description="Test Description" />)
    
    expect(screen.getByText('Test Title')).toBeInTheDocument()
    expect(screen.getByText('Test Description')).toBeInTheDocument()
  })
})
```

### API тесты

```typescript
// api.test.ts
describe('/api/health', () => {
  it('should return health status', async () => {
    const response = await fetch('/api/health')
    const data = await response.json()
    
    expect(response.status).toBe(200)
    expect(data).toHaveProperty('status', 'healthy')
  })
})
```

### Требования к тестам

- Покрытие > 70% для новых функций
- Тестирование happy path и edge cases
- Мокирование внешних зависимостей
- Описательные названия тестов

## Отправка изменений

### 1. Pre-commit проверки

Перед каждым коммитом автоматически запускаются:
- ESLint проверка
- Prettier форматирование
- TypeScript проверка
- Тесты для измененных файлов

### 2. Создание Pull Request

1. Отправьте ветку в свой fork:
   ```bash
   git push origin feature/awesome-feature
   ```

2. Создайте PR через GitHub UI

3. Заполните шаблон PR:
   - Описание изменений
   - Связанные issues
   - Скриншоты (для UI изменений)
   - Checklist

### 3. Шаблон PR

```markdown
## Описание
Краткое описание изменений.

## Тип изменений
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Связанные issues
Fixes #123

## Тестирование
- [ ] Тесты проходят локально
- [ ] Добавлены новые тесты
- [ ] Проверено в разных браузерах

## Скриншоты
(если применимо)

## Checklist
- [ ] Код следует стандартам проекта
- [ ] Self-review выполнен
- [ ] Комментарии добавлены в сложные части
- [ ] Документация обновлена
```

### 4. Review процесс

- Minimum 1 approval для merge
- Все проверки CI/CD должны пройти
- Конфликты должны быть разрешены
- Соблюдение стандартов кода

## Обратная связь

### 🐛 Баги и проблемы
- GitHub Issues: [github.com/upak/frontend/issues](https://github.com/upak/frontend/issues)

### 💬 Обсуждения
- GitHub Discussions: [github.com/upak/frontend/discussions](https://github.com/upak/frontend/discussions)

### 📧 Прямая связь
- Email: dev@upak.space
- Telegram: [@upak_dev](https://t.me/upak_dev)

### 📚 Документация
- Основная документация: [docs.upak.space](https://docs.upak.space)
- API Reference: [api-docs.upak.space](https://api-docs.upak.space)

## Признание

Все участники, внесшие вклад в проект, будут указаны в:
- README.md в разделе Contributors
- CHANGELOG.md для значимых изменений
- GitHub Contributors page

Спасибо за ваш вклад в развитие UPAK Frontend! 🚀

---

**Есть вопросы?** Не стесняйтесь создавать issue или писать в наши каналы связи.
