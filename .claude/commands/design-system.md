# Platinumlist Design System — Skill для Claude

Ты — эксперт по дизайн-системе Platinumlist. При создании прототипов, веб-страниц, лендингов и макетов **ВСЕГДА** следуй этим правилам, токенам и компонентам.

## Технологии

- **React 18** + **TypeScript** (strict mode)
- **CSS Modules** (`.module.css`) — никаких inline-styles и styled-components
- **CSS Custom Properties** из `src/styles/tokens.css` — единственный источник правды
- **Vite 6** — сборщик
- **Storybook 8.6** — документация компонентов

---

## Design Tokens

### Шрифты

```css
--font-family-default: 'Inter Variable', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-family-accent: 'MD Nichrome', serif;  /* только для акцентных заголовков + text-transform: uppercase */
```

### Размеры шрифтов

| Токен | Значение | Использование |
|-------|----------|---------------|
| `--font-size-xs` | 12px | Caption, hint, мелкий текст |
| `--font-size-sm` | 14px | Body small, подписи |
| `--font-size-md` | 16px | Body base, основной текст |
| `--font-size-lg` | 20px | Body large, подзаголовки |
| `--font-size-xl` | 24px | Title SM |
| `--font-size-2xl` | 32px | Title XL |
| `--font-size-3xl` | 40px | Title 3XL |
| `--font-size-4xl` | 48px | Title 4XL, герой-блоки |

### Начертания

```
--font-weight-regular: 400   /* body текст */
--font-weight-medium: 500    /* body strong, акценты */
--font-weight-semibold: 600  /* заголовки sm-xl */
--font-weight-bold: 700      /* заголовки 2xl-4xl */
```

### Высота строки

```
--font-line-height-2xs: 14px   (для xs текста)
--font-line-height-xs: 18px    (для sm текста)
--font-line-height-sm: 20px    (для sm short текста)
--font-line-height-md: 24px    (для md текста)
--font-line-height-xl: 32px    (для xl текста)
--font-line-height-2xl: 40px   (для 2xl текста)
--font-line-height-3xl: 44px   (для 3xl текста)
--font-line-height-4xl: 52px   (для 4xl текста)
```

### Цвета — Контент

| Токен | Hex | Использование |
|-------|-----|---------------|
| `--content-primary` | `#0f0f15` | Основной текст, заголовки |
| `--content-secondary` | `#6e6e81` | Вторичный текст, подписи |
| `--content-highlight` | `#9999ac` | Плейсхолдеры, неактивный текст |
| `--content-pure-inverse` | `#ffffff` | Текст на тёмном фоне |

### Цвета — Фон

| Токен | Hex | Использование |
|-------|-----|---------------|
| `--bg-default` | `#ffffff` | Основной фон страницы |
| `--bg-base` | `#f5f5f7` | Вторичный фон, карточки |
| `--bg-elevated` | `#ffffff` | Приподнятые поверхности |
| `--bg-floating` | `#ffffff` | Модалки, дропдауны |
| `--bg-border` | `#ecedf2` | Границы, разделители |
| `--bg-border-hover` | `#dcdce0` | Границы при ховере |
| `--bg-fade` | `rgba(15,15,21,0.5)` | Оверлеи, затемнение |

### Цвета — Интерактивные

```css
/* Primary (тёмная кнопка) */
--interaction-primary-bg: #0f0f15;
--interaction-primary-bg-hover: #3c3c4a;
--interaction-primary-content: #ffffff;
--interaction-primary-content-hover: #ecedf2;

/* Secondary (светлая кнопка) */
--interaction-secondary-bg: #ecedf2;
--interaction-secondary-bg-hover: #f5f5f8;
--interaction-secondary-content: #0f0f15;
--interaction-secondary-content-hover: #6e6e81;

/* Ghost (прозрачная кнопка) */
--interaction-ghost-bg-hover: rgba(15, 15, 21, 0.06);

/* Disabled */
--interaction-disable-bg: #ecedf2;
--interaction-disable-content: #b3b3c3;
```

### Акцентные цвета

```css
--accent-alert: #f93643;     /* Ошибки, алерты */
--accent-link: #4d7cff;      /* Ссылки */
--brand-platinum-day: #c7f88a; /* Бренд Platinumlist (лайм) */
```

### Отступы (Spacing)

```css
--spacing-2: 2px;
--spacing-4: 4px;
--spacing-6: 6px;
--spacing-8: 8px;
--spacing-12: 12px;
--spacing-14: 14px;
--spacing-16: 16px;
```

### Скругления (Border Radius)

| Токен | Значение | Использование |
|-------|----------|---------------|
| `--radius-xs` | 8px | Маленькие элементы (тултипы, опции) |
| `--radius-sm` | 12px | Средние элементы (инпуты M, бейджи) |
| `--radius-base` | 16px | Стандартные элементы (инпуты L, карточки) |
| `--radius-2xlg` | 24px | Большие элементы (модалки) |

### Тени

```css
--shadow-flag: 0px 2px 8px 0px rgba(0, 0, 0, 0.12);
```

---

## Типографика (Typography)

### Варианты

**Заголовки (Title):**
- `title-4xl` — 48px / bold / line-height 52px → `<h1>`
- `title-3xl` — 40px / bold / line-height 44px → `<h2>`
- `title-2xl` — 32px / bold / line-height 40px → `<h2>`
- `title-xl` — 24px / semibold / line-height 32px → `<h3>`
- `title-lg` — 20px / semibold / line-height 24px → `<h4>`
- `title-base` — 16px / semibold / line-height 24px → `<h5>`
- `title-sm` — 14px / semibold / line-height 20px → `<h5>`

**Body Short (плотный текст):**
- `body-short-lg` — 20px / regular / line-height 24px
- `body-short-base` — 16px / regular / line-height 20px
- `body-short-sm` — 14px / regular / line-height 18px
- `body-short-sm-strong` — 14px / semibold / line-height 18px
- `body-short-caption` — 12px / regular / line-height 14px
- `body-short-caption-strong` — 12px / semibold / line-height 14px

**Body Long (читаемый текст с увеличенным line-height):**
- `body-long-lg` — 20px / regular / line-height 32px
- `body-long-base` — 16px / regular / line-height 24px
- `body-long-sm` — 14px / regular / line-height 20px
- `body-long-caption` — 12px / regular / line-height 18px

**Акцентные заголовки:** добавь `accent={true}` → шрифт MD Nichrome + uppercase.

**Мультиязычность:** `lang` prop: `en`, `ru`, `ar`, `el`. Для `ar` — direction: rtl.

**Цвета текста:** `color` prop: `primary`, `secondary`, `highlight`, `inverse`.

---

## Компоненты — API Reference

### Button

```tsx
<Button variant="primary" size="L" onClick={fn}>Label</Button>
<Button variant="secondary" size="M" leftIcon={<Icon />}>With Icon</Button>
<Button variant="ghost" size="S" type="icon-only" icon={<Icon />} />
<Button variant="primary" size="L" loading>Loading</Button>
```

| Prop | Тип | Default | Описание |
|------|-----|---------|----------|
| variant | `'primary' \| 'secondary' \| 'ghost'` | `'primary'` | Визуальный стиль |
| size | `'L' \| 'M' \| 'S' \| 'XS'` | `'L'` | Размер (56/48/40/32px высота) |
| type | `'flexible' \| 'fixed' \| 'icon-only'` | `'flexible'` | fixed=220px ширина |
| disabled | `boolean` | `false` | Неактивное состояние |
| loading | `boolean` | `false` | Спиннер с анимацией |
| leftIcon / rightIcon | `ReactNode` | — | Иконки по бокам от текста |
| icon | `ReactNode` | — | Для type="icon-only" |

### TextInput

```tsx
<TextInput size="L" label="Email" placeholder="Enter email" />
<TextInput size="M" error hint="Required field" showHint showLeftIcon />
```

| Prop | Тип | Default | Описание |
|------|-----|---------|----------|
| size | `'L' \| 'M'` | `'L'` | 56px / 48px высота |
| label | `string` | — | Плавающий лейбл |
| error | `boolean` | `false` | Ошибка (красная рамка) |
| hint | `string` | — | Подсказка под полем |
| showLeftIcon / showRightIcon | `boolean` | `false` | Иконки |
| showButton | `boolean` | `false` | Кнопка внутри поля |
| disabled | `boolean` | `false` | Неактивное |

### Textarea

```tsx
<Textarea size="L" label="Description" resizable />
```

| Prop | Тип | Default | Описание |
|------|-----|---------|----------|
| size | `'L' \| 'M'` | `'L'` | Размер |
| label | `string` | — | Плавающий лейбл |
| resizable | `boolean` | `true` | Можно ли менять размер |
| error | `boolean` | `false` | Ошибка |
| hint | `string` | — | Подсказка |

### Select

```tsx
<Select
  size="L"
  label="Country"
  options={[{ value: 'ae', label: 'UAE' }, { value: 'ru', label: 'Russia' }]}
  onChange={(val) => {}}
/>
```

| Prop | Тип | Default | Описание |
|------|-----|---------|----------|
| options | `{ value: string; label: string; disabled?: boolean }[]` | — | Опции |
| size | `'L' \| 'M'` | `'L'` | Размер |
| label | `string` | — | Плавающий лейбл |
| error | `boolean` | `false` | Ошибка |
| hint | `string` | — | Подсказка |

### Checkbox

```tsx
<Checkbox size="M" label="Agree to terms" checked onChange={(v) => {}} />
<Checkbox size="S" indeterminate />
```

| Prop | Тип | Default |
|------|-----|---------|
| size | `'M' \| 'S'` | `'M'` |
| checked | `boolean` | `false` |
| indeterminate | `boolean` | `false` |
| label | `string` | — |
| error | `boolean` | `false` |
| disabled | `boolean` | `false` |

### Radio

```tsx
<Radio size="M" label="Option A" checked onChange={(v) => {}} />
```

Те же пропы что и Checkbox (без indeterminate).

### Toggle

```tsx
<Toggle size="L" label="Notifications" checked onChange={(v) => {}} />
```

| Prop | Тип | Default |
|------|-----|---------|
| size | `'L' \| 'M'` | `'L'` |
| checked | `boolean` | `false` |
| label | `string` | — |
| disabled | `boolean` | `false` |

### Tumbler

Как Toggle, но с другим визуалом (inset shadow, без трека). Размеры: `'M' \| 'S'`.

### Badge

```tsx
<Badge variant="success" size="M" dot>Active</Badge>
```

| Prop | Тип | Default |
|------|-----|---------|
| variant | `'neutral' \| 'primary' \| 'success' \| 'warning' \| 'error'` | `'neutral'` |
| size | `'L' \| 'M' \| 'S'` | `'M'` |
| dot | `boolean` | `false` |

### Tag

```tsx
<Tag selected leftIcon={<Icon />}>Category</Tag>
<Tag type="icon-only" icon={<Icon />} />
```

| Prop | Тип | Default |
|------|-----|---------|
| type | `'flexible' \| 'icon-only'` | `'flexible'` |
| selected | `boolean` | `false` |
| disabled | `boolean` | `false` |
| leftIcon / rightIcon / icon | `ReactNode` | — |

### Tabs

```tsx
<Tabs
  size="L"
  items={[{ key: 'tab1', label: 'Events' }, { key: 'tab2', label: 'Tickets' }]}
  activeKey="tab1"
  onChange={(key) => {}}
  fullWidth
/>
```

| Prop | Тип | Default |
|------|-----|---------|
| size | `'L' \| 'M'` | `'L'` |
| items | `{ key: string; label: string; disabled?: boolean }[]` | — |
| activeKey | `string` | — |
| fullWidth | `boolean` | `false` |

### Avatar

```tsx
<Avatar size="L" src="/photo.jpg" name="John Doe" status="online" />
```

| Prop | Тип | Default |
|------|-----|---------|
| size | `'XL' \| 'L' \| 'M' \| 'S' \| 'XS'` | `'M'` |
| src | `string` | — |
| name | `string` | — |
| status | `'online' \| 'offline' \| 'away' \| 'none'` | `'none'` |

Размеры: XL=64px, L=48px, M=40px, S=32px, XS=24px.

### Modal

```tsx
<Modal
  isOpen={true}
  variant="popup"
  adaptive="desktop"
  title="Confirm"
  subtitle="Are you sure?"
  primaryButtonText="Yes"
  secondaryButtonText="Cancel"
  onPrimaryClick={fn}
  onClose={fn}
  showCloseButton
>
  <p>Content here</p>
</Modal>
```

| Prop | Тип | Default |
|------|-----|---------|
| isOpen | `boolean` | — |
| variant | `'popup' \| 'dialog'` | `'popup'` |
| adaptive | `'desktop' \| 'touch'` | `'desktop'` |
| title / subtitle | `string` | — |
| primaryButtonText / secondaryButtonText | `string` | — |
| showCloseButton / showBackButton | `boolean` | — |
| showCaption / captionText | `boolean` / `ReactNode` | — |

Popup: 448px, dialog: 380px. Touch → bottom sheet с pull indicator.

### Table

```tsx
<Table size="L" headerFill>
  <Table.Header>
    <Table.HeaderCell sort="asc" onSort={fn}>Name</Table.HeaderCell>
    <Table.HeaderCell>Email</Table.HeaderCell>
  </Table.Header>
  <Table.Body>
    <Table.Row>
      <Table.Cell><Table.TextContent title="John" subtitle="Admin" /></Table.Cell>
      <Table.Cell>john@example.com</Table.Cell>
    </Table.Row>
  </Table.Body>
</Table>
```

Размеры строк: L=64px, M=52px, S=44px. Сортировка: `'off' | 'asc' | 'desc'`.
Sub-components: TextContent, AvatarContent, ChipsContent, ActionsContent.

### Calendar

```tsx
<Calendar type="single" display="inline" size="L" onChange={(date) => {}} />
<Calendar type="range" display="dropdown" months={2} quickSelect />
```

| Prop | Тип | Default |
|------|-----|---------|
| type | `'single' \| 'range'` | `'single'` |
| display | `'dropdown' \| 'inline'` | `'inline'` |
| size | `'L' \| 'M'` | `'L'` |
| months | `1 \| 2` | `1` |
| quickSelect | `boolean` | `false` |
| locale | `string` | — |
| minDate / maxDate | `Date` | — |
| disabledDates | `Date[]` | — |

### Tooltip

```tsx
<Tooltip text="Help text" placement="top">
  <Button>Hover me</Button>
</Tooltip>
```

Placement: `'top' | 'bottom' | 'left' | 'right'`. Стиль: тёмный фон, белый текст, 12px.

### Hint

```tsx
<Hint text="This field is required" error showIcon />
```

### Divider

```tsx
<Divider orientation="horizontal" />
<Divider orientation="vertical" />
<Divider text="or" />
```

### Logo

```tsx
<Logo variant="full" color="default" height={32} />
<Logo variant="sign" color="black" />
```

Цвета: default (фиолетовый+голубой), black (#0f0f15), white (#ffffff).
Варианты: sign (только знак), full (знак + текст).
Суббренды: `'none' | 'for-organisers' | 'sale-console'`.

### Icon

```tsx
<Icon name="search" size={24} variant="outline" />
<Icon name="close" size={16} variant="filled" />
```

Размеры: 12, 16, 20, 24px. Варианты: outline, filled.
Доступные иконки: search, error, chevron-down, close, arrow-left, chevron-left, chevron-right, calendar, clear, resize.

---

## Правила использования

### ОБЯЗАТЕЛЬНО

1. **Используй только токены** — никаких хардкод-значений для цветов, отступов, шрифтов
2. **CSS Modules** — каждый компонент имеет `.module.css`
3. **Размеры кратны системе** — 2, 4, 6, 8, 12, 14, 16px
4. **Анимации** — transition: 0.15s ease для hover-состояний, 0.2s для toggle/switch
5. **Border** — всегда 1px solid var(--bg-border)
6. **Disabled-состояние** — background: --interaction-disable-bg, color: --interaction-disable-content
7. **Ошибки** — border-color: --accent-alert, hint text красный

### ЗАПРЕЩЕНО

1. Произвольные цвета вне токенов
2. `!important` в стилях
3. Inline-стили (кроме динамических значений)
4. `px` значения не из системы spacing
5. Шрифты кроме Inter Variable и MD Nichrome
6. border-radius не из системы (8, 12, 16, 24px)

### Паттерны компонентов

```
src/components/ComponentName/
├── ComponentName.tsx        # React компонент
├── ComponentName.module.css # Стили
├── ComponentName.stories.tsx # Storybook истории
└── index.ts                 # export { ComponentName } from './ComponentName'
```

- Props-интерфейс: `ComponentNameProps`
- Размеры: `type ComponentSize = 'L' | 'M' | 'S'`
- Варианты: `type ComponentVariant = 'primary' | 'secondary' | 'ghost'`
- CSS классы через массив `.filter(Boolean).join(' ')`
- Controlled + uncontrolled (useState с внешним value)

### Адаптивные брейкпоинты

- Mobile: < 640px
- Tablet: 640–1023px
- Desktop: >= 1024px

### Доступность (a11y)

- Все интерактивные элементы имеют focus-visible стили
- aria-label для иконок без текста
- role="dialog" + aria-modal для модалок
- Контрастность минимум 4.5:1 для текста
