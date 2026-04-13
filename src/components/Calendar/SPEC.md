# Component Specification: Calendar / Date Picker

## Overview

Адаптивный компонент календаря для дизайн-системы. Поддерживает выбор одной даты, диапазона дат, inline-отображение и dropdown-режим. Используется в формах, фильтрах, дашбордах. Построен на существующих токенах дизайн-системы (tokens.css), следует паттернам TextInput / Select.

---

## 1. Типы компонента (Component Types)

| Тип | Описание | Использование |
|-----|----------|---------------|
| **Inline Calendar** | Календарь всегда видимый, встроен в layout | Дашборды, сайдбары, формы с постоянным выбором даты |
| **Date Picker** | Input-поле + dropdown календарь | Формы, фильтры — одна дата |
| **Date Range Picker** | Два input-поля + dropdown с двумя месяцами | Фильтры по периоду, отчёты |

---

## 2. Анатомия (Anatomy)

### 2.1 Date Picker (Dropdown)

```
+------------------------------------------+
| Input Trigger                            |
| +--------------------------------------+ |
| | [Cal] Label               DD.MM.YYYY | |
| |       Selected Date          [Clear] | |
| +--------------------------------------+ |
| Hint text                                |
+------------------------------------------+
         |
         v (dropdown)
+------------------------------------------+
| [<]   Март 2026             [>]         |
|------------------------------------------|
| Пн  Вт  Ср  Чт  Пт  Сб  Вс            |
|------------------------------------------|
| 23  24  25  26  27  28   1              |
|  2   3   4   5   6   7   8              |
|  9 [10] 11  12  13  14  15              |
| 16  17  18  19  20  21  22              |
| 23  24  25  26  27  28  29              |
| 30  31   1   2   3   4   5              |
|------------------------------------------|
| [Сегодня]                                |
+------------------------------------------+
```

### 2.2 Date Range Picker

```
+---------------------+  +---------------------+
| [Cal]  Start Date   |  | [Cal]  End Date     |
+---------------------+  +---------------------+
              |
              v (dropdown)
+------------------------------------------+-------------------------------------------+
| [<]   Март 2026                          |   Апрель 2026              [>]            |
|------------------------------------------|-------------------------------------------|
| Пн  Вт  Ср  Чт  Пт  Сб  Вс            | Пн  Вт  Ср  Чт  Пт  Сб  Вс             |
|  2   3   4   5   6   7   8              |       1   2   3   4   5   6              |
|  9 [10]■11 ■12 ■13 ■14  15              |  7   8   9  10  11  12  13              |
| 16 ■17 ■18 ■19 ■20 [21] 22              | 14  15  16  17  18  19  20              |
| 23  24  25  26  27  28  29              | 21  22  23  24  25  26  27              |
| 30  31                                   | 28  29  30                               |
|------------------------------------------|-------------------------------------------|
| Quick Select: [Сегодня] [7 дн] [30 дн] [Этот мес.] [Пред. мес.]                    |
+------------------------------------------+-------------------------------------------+
```

`[10]` = range-start, `[21]` = range-end, `■` = in-range

### 2.3 Inline Calendar

```
+------------------------------------------+
| [<]   Март 2026             [>]         |
|------------------------------------------|
| Пн  Вт  Ср  Чт  Пт  Сб  Вс            |
|------------------------------------------|
| 23  24  25  26  27  28   1              |
|  2   3   4   5   6   7   8              |
|  9 [10] 11  12  13  14  15              |
| 16  17  18  19  20  21  22              |
| 23  24  25  26  27  28  29              |
| 30  31   1   2   3   4   5              |
+------------------------------------------+
```

### Структурная декомпозиция

```
Calendar
├── CalendarHeader
│   ├── PrevButton (IconButton)
│   ├── MonthYearLabel (clickable -> month/year selector)
│   └── NextButton (IconButton)
├── WeekdayRow
│   └── WeekdayCell x7
├── DaysGrid
│   └── DayCell x42 (6 rows x 7 cols)
├── QuickSelectBar (optional)
│   └── QuickSelectButton x N
└── Footer (optional)
    └── Action buttons
```

---

## 3. Состояния ячейки дня (Day Cell States)

| Состояние | Описание | Background | Text Color | Border | Дополнительно |
|-----------|----------|-----------|------------|--------|---------------|
| **default** | Обычный день текущего месяца | transparent | `--content-primary` | none | — |
| **hover** | Курсор над ячейкой | `--interaction-ghost-bg-hover` | `--content-primary` | none | cursor: pointer |
| **pressed** | Нажатие (active) | `--bg-base` | `--content-primary` | none | scale(0.95) |
| **focused** | Фокус с клавиатуры | transparent | `--content-primary` | 2px solid `--bg-border` | outline ring |
| **selected** | Выбранная дата | `--interaction-primary-bg` | `--content-pure-inverse` | none | border-radius: 50% |
| **selected + hover** | Hover по выбранной | `--interaction-primary-bg-hover` | `--content-pure-inverse` | none | — |
| **today** | Сегодняшняя дата (не выбрана) | transparent | `--content-primary` | 1px solid `--content-primary` | border-radius: 50% |
| **today + selected** | Сегодня и выбрана | `--interaction-primary-bg` | `--content-pure-inverse` | none | dot indicator below |
| **disabled** | Недоступный день | transparent | `--content-highlight` | none | opacity: 0.4, pointer-events: none |
| **other-month** | День из другого месяца | transparent | `--content-highlight` | none | — |
| **range-start** | Начало диапазона | `--interaction-primary-bg` | `--content-pure-inverse` | none | border-radius: 50% 0 0 50% |
| **range-end** | Конец диапазона | `--interaction-primary-bg` | `--content-pure-inverse` | none | border-radius: 0 50% 50% 0 |
| **in-range** | Внутри диапазона | `--interaction-ghost-bg-hover` | `--content-primary` | none | border-radius: 0 |
| **in-range + hover** | Hover внутри диапазона | `--bg-base` | `--content-primary` | none | — |

### Визуальная матрица состояний

```
              default  hover  pressed  focused  disabled  other-month
single        ○        ◉ bg   ◉ bg+s  ○+ring   ○ dim     ○ light
selected      ●        ● dark  —       ●+ring   —         —
today         ⊙        ⊙+bg   ⊙+bg+s  ⊙+ring   ⊙ dim     —
range-start   ◐        ◐ dark  —       ◐+ring   —         —
in-range      ■        ■ dark  —       ■+ring   —         —
range-end     ◑        ◑ dark  —       ◑+ring   —         —
```

---

## 4. Состояния компонента (Component States)

### 4.1 Date Picker Input

| Состояние | Input Border | Background | Label Color | Иконка |
|-----------|-------------|-----------|-------------|--------|
| **default** | 1px `--bg-base` | `--bg-default` | `--content-secondary` | Calendar, `--content-secondary` |
| **hover** | 1px `--bg-border` | `--bg-default` | `--content-secondary` | Calendar, `--content-secondary` |
| **focused / open** | 1px `--bg-border` | `--bg-default` | `--content-secondary` (floating) | Calendar, `--content-primary` |
| **filled** | 1px `--bg-base` | `--bg-default` | `--content-secondary` (floating) | Calendar + Clear button |
| **error** | 1px `--accent-alert` | `--bg-default` | `--content-secondary` | Calendar, `--accent-alert` |
| **disabled** | 1px `--bg-base` | `--bg-default` | `--content-secondary` | opacity: 0.4, cursor: not-allowed |

### 4.2 Calendar Dropdown

| Состояние | Описание |
|-----------|----------|
| **closed** | Dropdown скрыт |
| **open** | Dropdown видимый, shadow: `--shadow-flag`, border-radius: `--radius-base` |
| **month-select** | Grid месяцев (Янв...Дек) вместо дней |
| **year-select** | Grid/список годов вместо дней |

---

## 5. Варианты (Variants)

### 5.1 Размеры (Size)

| Size | Input Height | Day Cell Size | Font (days) | Font (header) | Padding grid |
|------|-------------|---------------|-------------|---------------|-------------|
| **L** | 56px | 40px | `--font-size-sm` (14px) | `--font-size-md` (16px) | 16px |
| **M** | 48px | 36px | `--font-size-xs` (12px) | `--font-size-sm` (14px) | 12px |

### 5.2 Тип (Type)

| Variant | Prop value | Описание |
|---------|-----------|----------|
| **single** | `type="single"` | Выбор одной даты |
| **range** | `type="range"` | Выбор диапазона дат |

### 5.3 Режим отображения (Display Mode)

| Variant | Prop value | Описание |
|---------|-----------|----------|
| **dropdown** | `display="dropdown"` | Раскрывающийся из input |
| **inline** | `display="inline"` | Всегда видимый, без input |

### 5.4 Количество месяцев

| Variant | Prop | Описание |
|---------|------|----------|
| **1 month** | `months={1}` | Один месяц (default для single) |
| **2 months** | `months={2}` | Два месяца рядом (default для range) |

### 5.5 Quick Select

| Variant | Prop | Описание |
|---------|------|----------|
| **hidden** | `quickSelect={false}` | Без панели быстрого выбора |
| **visible** | `quickSelect={true}` | Пресеты: Сегодня, Вчера, 7 дней, 30 дней, Этот мес., Пред. мес. |

---

## 6. Дизайн-токены (Design Tokens)

Все токены ссылаются на существующую систему из `tokens.css`.

```yaml
tokens:
  # ---- Calendar Container (Dropdown) ----
  calendar:
    background: --bg-default               # #FFFFFF
    borderRadius: --radius-base             # 16px
    shadow: --shadow-flag                   # 0px 1px 4px rgba(0,0,0,0.16)
    border: 1px solid --bg-base             # rgba(153,153,172,0.16)
    padding: --spacing-16                   # 16px
    gap: --spacing-8                        # 8px

  # ---- Header (Month/Year navigation) ----
  header:
    height: 40px
    gap: --spacing-8                        # 8px
    label:
      color: --content-primary              # #0F0F15
      fontSize: --font-size-md              # 16px
      fontWeight: --font-weight-semibold    # 600
      lineHeight: --font-line-height-sm     # 20px
    navButton:
      size: 40px
      borderRadius: --radius-xs             # 8px
      color: --content-secondary            # #6E6E81
      hoverBg: --interaction-ghost-bg-hover # rgba(153,153,172,0.08)
      activeBg: --bg-base                   # rgba(153,153,172,0.16)
      disabledOpacity: 0.4

  # ---- Weekday Row ----
  weekday:
    color: --content-highlight              # #B3B3C3
    fontSize: --font-size-xs                # 12px
    fontWeight: --font-weight-medium        # 500
    lineHeight: --font-line-height-2xs      # 14px
    height: 32px
    textTransform: uppercase

  # ---- Day Cell ----
  dayCell:
    size:
      L: 40px
      M: 36px
    borderRadius: 50%                       # circle for single selection
    fontSize:
      L: --font-size-sm                     # 14px
      M: --font-size-xs                     # 12px
    fontWeight:
      default: --font-weight-regular        # 400
      today: --font-weight-semibold         # 600
      selected: --font-weight-medium        # 500
    color:
      default: --content-primary            # #0F0F15
      otherMonth: --content-highlight       # #B3B3C3
      disabled: --content-highlight         # #B3B3C3
      selected: --content-pure-inverse      # #FFFFFF
      today: --content-primary              # #0F0F15
    background:
      default: transparent
      hover: --interaction-ghost-bg-hover   # rgba(153,153,172,0.08)
      pressed: --bg-base                    # rgba(153,153,172,0.16)
      selected: --interaction-primary-bg    # #221327
      selectedHover: --interaction-primary-bg-hover  # #3C3C4A
      rangeMiddle: --interaction-ghost-bg-hover      # rgba(153,153,172,0.08)
      today: transparent
    border:
      today: 1px solid --content-primary    # #0F0F15
      focused: 2px solid --bg-border        # #9999AC
    transition: all 150ms ease

  # ---- Quick Select Bar ----
  quickSelect:
    gap: --spacing-8                        # 8px
    padding: --spacing-12 0 0 0             # top padding
    borderTop: 1px solid --bg-base
    button:
      height: 32px
      paddingH: --spacing-12               # 12px
      borderRadius: --radius-xs             # 8px
      fontSize: --font-size-xs              # 12px
      fontWeight: --font-weight-medium      # 500
      color: --content-secondary            # #6E6E81
      background: transparent
      hoverBg: --interaction-ghost-bg-hover
      activeBg: --interaction-secondary-bg  # #ECEDF2
      selectedBg: --interaction-secondary-bg
      selectedColor: --interaction-secondary-content  # #221327

  # ---- Input Trigger (Date Picker mode) ----
  # Follows existing TextInput tokens exactly
  input:
    # Inherits all TextInput tokens from TextInput.module.css
    icon:
      calendar:
        size: 20px
        color: --content-secondary          # #6E6E81
      clear:
        size: 20px
        color: --content-highlight          # #B3B3C3
        hoverColor: --content-secondary     # #6E6E81
```

---

## 7. Тёмная тема (Dark Theme)

Для поддержки тёмной темы добавляются override-токены через `[data-theme="dark"]` или `prefers-color-scheme: dark`:

```yaml
dark-theme-overrides:
  --bg-default: #1A1A24
  --bg-base: rgba(255, 255, 255, 0.08)
  --bg-border: #4A4A5C
  --bg-elevated: #242430
  --bg-floating: #1E1E2A
  --content-primary: #F0F0F5
  --content-secondary: #9999AC
  --content-highlight: #5C5C6E
  --content-pure-inverse: #FFFFFF
  --interaction-primary-bg: #FFFFFF
  --interaction-primary-bg-hover: #E0E0E8
  --interaction-secondary-bg: rgba(255, 255, 255, 0.08)
  --interaction-secondary-bg-hover: rgba(255, 255, 255, 0.12)
  --interaction-secondary-content: #F0F0F5
  --interaction-ghost-bg-hover: rgba(255, 255, 255, 0.06)
  --accent-alert: #FF4D5A
  --shadow-flag: 0px 2px 8px 0px rgba(0, 0, 0, 0.4)
```

В тёмной теме `selected` day cell инвертируется: белый фон, тёмный текст.

---

## 8. Интерактивные спецификации (Interactions)

### 8.1 Анимации и переходы

| Взаимодействие | Property | Duration | Easing | Детали |
|----------------|----------|----------|--------|--------|
| Dropdown open | opacity, transform | 200ms | ease-out | fadeIn + translateY(-4px -> 0) |
| Dropdown close | opacity, transform | 150ms | ease-in | fadeOut + translateY(0 -> -4px) |
| Day hover | background-color | 150ms | ease | — |
| Day select | background-color, color | 150ms | ease | — |
| Day press | transform | 100ms | ease-out | scale(0.95) |
| Month switch | opacity, transform | 250ms | ease-in-out | slide left/right + crossfade |
| Focus ring appear | box-shadow | 100ms | ease-out | ring appears |
| Input label float | transform, font-size | 250ms | cubic-bezier(0.4,0,0.2,1) | Matches TextInput |

### 8.2 Клавиатурная навигация

| Клавиша | Действие |
|---------|----------|
| `Tab` | Переход к следующему интерактивному элементу |
| `Shift+Tab` | Переход к предыдущему элементу |
| `Enter` / `Space` | Выбрать день / открыть dropdown / подтвердить |
| `Escape` | Закрыть dropdown, вернуть фокус на input |
| `Arrow Left` | Предыдущий день |
| `Arrow Right` | Следующий день |
| `Arrow Up` | Тот же день на неделю назад |
| `Arrow Down` | Тот же день на неделю вперёд |
| `Page Up` | Предыдущий месяц |
| `Page Down` | Следующий месяц |
| `Shift+Page Up` | Предыдущий год |
| `Shift+Page Down` | Следующий год |
| `Home` | Первый день месяца |
| `End` | Последний день месяца |

### 8.3 Мышь / Touch

| Действие | Результат |
|----------|-----------|
| Click input | Открыть dropdown, фокус на текущей/сегодняшней дате |
| Click day | Выбрать дату (single) / установить start/end (range) |
| Click nav arrow | Переключить месяц |
| Click month/year label | Переключиться в режим выбора месяца/года |
| Click outside | Закрыть dropdown |
| Click clear (x) | Сбросить значение |
| Click quick select preset | Установить дату/диапазон |
| Long press day (touch) | Показать tooltip с полной датой |

### 8.4 Range-выбор (поведение)

1. Первый клик — устанавливает `range-start`, `range-end` сбрасывается
2. Hover после первого клика — preview диапазона (in-range подсветка)
3. Второй клик — устанавливает `range-end`
4. Если второй клик < start — swap (start и end меняются местами)
5. Клик на уже выбранный range — сброс, начинается новый выбор

---

## 9. Адаптивное поведение (Responsive)

| Breakpoint | Поведение |
|------------|----------|
| **Mobile** (< 640px) | Dropdown: full-width bottom sheet, 1 month, touch-friendly day cells (min 44px). Range picker: stacked inputs, 1 month at a time с свайпом |
| **Tablet** (640-1023px) | Dropdown: standard dropdown, 1-2 months. Range picker: side-by-side inputs, 2 months |
| **Desktop** (>= 1024px) | Standard dropdown/inline, 1-2 months по конфигурации. Range: 2 months side-by-side |

### Mobile Bottom Sheet

```
+------------------------------------------+
| ─── (drag handle)                        |
|                                          |
| [<]   Март 2026             [>]         |
|                                          |
| Пн  Вт  Ср  Чт  Пт  Сб  Вс            |
|                                          |
|  .   .   .   .   .   .   1              |
|  2   3   4   5   6   7   8              |
|  9 [10] 11  12  13  14  15              |
| 16  17  18  19  20  21  22              |
| 23  24  25  26  27  28  29              |
| 30  31                                   |
|                                          |
| [  Сегодня  ] [  Очистить  ]            |
+------------------------------------------+
```

- Высота: auto, max-height: 80vh
- Border-radius top: `--radius-2xlg` (24px)
- Backdrop: `--bg-fade`
- Swipe down to close
- Day cells: min 44x44px touch target

---

## 10. Accessibility (A11y)

```yaml
accessibility:
  role:
    calendar: role="dialog" (dropdown), role="grid" (inline)
    calendarGrid: role="grid"
    weekdayRow: role="row"
    weekdayCell: role="columnheader", abbr="Понедельник"
    dayRow: role="row"
    dayCell: role="gridcell"
    dayButton: role="button", tabindex="0" / "-1"
    navButton: role="button", aria-label="Предыдущий месяц" / "Следующий месяц"
    monthYearLabel: role="heading", aria-level="2", aria-live="polite"

  aria:
    input:
      - aria-haspopup: "dialog"
      - aria-expanded: "true"/"false"
      - aria-controls: "[calendar-panel-id]"
      - aria-label: "[Label]: [selected date]"
    calendar:
      - aria-label: "Выбор даты" / "Выбор диапазона дат"
      - aria-modal: "true" (dropdown mode)
    day:
      - aria-selected: "true"/"false"
      - aria-disabled: "true" (disabled days)
      - aria-current: "date" (today)
      - aria-label: "10 марта 2026, понедельник" (full date readout)

  focus:
    - Visible focus ring: 2px `--bg-border`, offset 2px
    - Focus trap inside dropdown when open
    - Roving tabindex in day grid (only focused day has tabindex="0")
    - On open: focus moves to selected date or today
    - On close: focus returns to input trigger

  contrast:
    - Day text default: 4.5:1+ (#0F0F15 on #FFFFFF = 18.3:1)
    - Day text selected: 4.5:1+ (#FFFFFF on #221327 = 14.7:1)
    - Day text disabled: informational, not actionable
    - Header text: 4.5:1+ (#0F0F15 on #FFFFFF)
    - Weekday text: decorative labels, 3:1 sufficient

  touchTarget:
    - Day cells: min 44x44px on mobile
    - Nav buttons: min 44x44px
    - Quick select buttons: min 44x32px
```

---

## 11. Локализация (Localization)

### Поддержка форматов дат

| Locale | Формат даты | Первый день недели | Пример |
|--------|------------|-------------------|--------|
| ru-RU | DD.MM.YYYY | Понедельник | 09.03.2026 |
| en-US | MM/DD/YYYY | Воскресенье | 03/09/2026 |
| en-GB | DD/MM/YYYY | Понедельник | 09/03/2026 |
| de-DE | DD.MM.YYYY | Понедельник | 09.03.2026 |
| ja-JP | YYYY/MM/DD | Воскресенье | 2026/03/09 |

### Строки для перевода

```yaml
i18n:
  months:
    - "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь"
    - "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
  monthsShort:
    - "Янв", "Фев", "Мар", "Апр", "Май", "Июн"
    - "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"
  weekdays:
    - "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"
  weekdaysShort:
    - "Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"
  quickSelect:
    today: "Сегодня"
    yesterday: "Вчера"
    last7days: "7 дней"
    last30days: "30 дней"
    thisMonth: "Этот месяц"
    lastMonth: "Прошлый месяц"
  actions:
    clear: "Очистить"
    apply: "Применить"
    cancel: "Отмена"
  aria:
    prevMonth: "Предыдущий месяц"
    nextMonth: "Следующий месяц"
    selectDate: "Выбор даты"
    selectRange: "Выбор диапазона дат"
```

---

## 12. Figma Component Structure

### Иерархия компонентов в Figma

```
.Calendar/
├── _Base/
│   ├── DayCell              (Component Set: state x theme)
│   ├── WeekdayCell          (Component)
│   ├── NavigationButton     (Component Set: direction x state)
│   ├── MonthYearLabel       (Component Set: state)
│   └── QuickSelectButton    (Component Set: state x selected)
├── CalendarGrid             (Component: month grid assembly)
├── CalendarHeader           (Component)
├── QuickSelectBar           (Component)
├── InlineCalendar           (Component Set: size x months x quickSelect)
├── DatePickerInput          (Component Set: size x state)
├── DatePicker               (Component Set: size x state x quickSelect)
└── DateRangePicker          (Component Set: size x state x quickSelect)
```

### Figma Property Panel (Variants & Props)

**DayCell:**
| Property | Type | Values |
|----------|------|--------|
| State | Variant | default, hover, pressed, focused, selected, selectedHover, today, todaySelected, disabled, otherMonth |
| Range | Variant | none, start, middle, end |
| Theme | Variant | light, dark |

**DatePicker:**
| Property | Type | Values |
|----------|------|--------|
| Size | Variant | L, M |
| State | Variant | default, hover, focused, filled, error, disabled |
| Open | Boolean | true, false |
| Quick Select | Boolean | true, false |
| Has Value | Boolean | true, false |
| Label | Text | "Дата" |
| Value | Text | "09.03.2026" |
| Hint | Text | "Выберите дату" |
| Show Hint | Boolean | true, false |

**DateRangePicker:**
| Property | Type | Values |
|----------|------|--------|
| Size | Variant | L, M |
| State | Variant | default, hover, focused, filled, error, disabled |
| Open | Boolean | true, false |
| Quick Select | Boolean | true, false |
| Start Label | Text | "Начало" |
| End Label | Text | "Конец" |
| Start Value | Text | "09.03.2026" |
| End Value | Text | "21.03.2026" |

**InlineCalendar:**
| Property | Type | Values |
|----------|------|--------|
| Size | Variant | L, M |
| Months | Variant | 1, 2 |
| Type | Variant | single, range |
| Quick Select | Boolean | true, false |

---

## 13. Спецификация размеров (Spacing & Dimensions)

### Size L

```
Calendar Dropdown Width:     320px (1 month) / 656px (2 months)
Calendar Grid Padding:       16px
Header Height:               40px
Weekday Row Height:          32px
Day Cell Size:               40px x 40px
Day Cell Gap:                4px (horizontal), 2px (vertical)
Grid Rows:                   6
Grid Cols:                   7
Total Grid Height:           6 * 40px + 5 * 2px = 250px
Quick Select Bar Height:     44px
Divider:                     1px

Total Height (no QS):        16 + 40 + 8 + 32 + 8 + 250 + 16 = 370px
Total Height (with QS):      370 + 1 + 44 = 415px
```

### Size M

```
Calendar Dropdown Width:     280px (1 month) / 576px (2 months)
Calendar Grid Padding:       12px
Header Height:               36px
Weekday Row Height:          28px
Day Cell Size:               36px x 36px
Day Cell Gap:                2px (horizontal), 2px (vertical)
Total Grid Height:           6 * 36px + 5 * 2px = 226px
Quick Select Bar Height:     40px

Total Height (no QS):        12 + 36 + 6 + 28 + 6 + 226 + 12 = 326px
Total Height (with QS):      326 + 1 + 40 = 367px
```

---

## 14. Usage Guidelines

### DO

- Используй `inline` календарь когда выбор даты является основным действием на странице
- Используй `dropdown` когда дата — одно из полей формы
- Используй `range` с quick select для фильтров отчётов и аналитики
- Всегда показывай текущую выбранную дату в input поле
- Переключай на bottom sheet на мобильных устройствах
- Добавляй `minDate` / `maxDate` для ограничения доступных дат
- Используй `locale` prop для автоматической локализации

### DON'T

- Не используй inline календарь в тесных пространствах — используй dropdown
- Не делай dropdown шире 2 месяцев — это перегружает
- Не блокируй скролл страницы при открытом dropdown на десктопе
- Не показывай quick select для single date в маленьких формах
- Не используй calendar для выбора времени — это отдельный компонент TimePicker
- Не размещай 2-month range picker на мобильных — переключай на 1 month + swipe

---

## 15. API (Props Interface)

```typescript
interface CalendarProps {
  /** Type of date selection */
  type?: 'single' | 'range';
  /** Display mode */
  display?: 'dropdown' | 'inline';
  /** Component size */
  size?: 'L' | 'M';
  /** Number of visible months */
  months?: 1 | 2;
  /** Selected date (single mode) */
  value?: Date | null;
  /** Selected range (range mode) */
  range?: { start: Date | null; end: Date | null };
  /** Minimum selectable date */
  minDate?: Date;
  /** Maximum selectable date */
  maxDate?: Date;
  /** Disabled specific dates */
  disabledDates?: Date[];
  /** Locale for formatting */
  locale?: string;
  /** First day of week (0=Sun, 1=Mon) */
  firstDayOfWeek?: 0 | 1;
  /** Show quick select presets */
  quickSelect?: boolean;
  /** Custom quick select options */
  quickSelectOptions?: QuickSelectOption[];
  /** Input label */
  label?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Hint text */
  hint?: string;
  /** Show hint */
  showHint?: boolean;
  /** Error state */
  error?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Date format string */
  dateFormat?: string;
  /** On date change (single) */
  onChange?: (date: Date | null) => void;
  /** On range change */
  onRangeChange?: (range: { start: Date | null; end: Date | null }) => void;
  /** On dropdown open/close */
  onOpenChange?: (open: boolean) => void;
  /** Additional className */
  className?: string;
}

interface QuickSelectOption {
  label: string;
  getValue: () => Date | { start: Date; end: Date };
}
```

---

## 16. Checklist

- [x] Все состояния ячеек дня определены (10 состояний + combinations)
- [x] Все состояния компонента определены (6 для input, 4 для dropdown)
- [x] Все варианты специфицированы (size, type, display, months, quickSelect)
- [x] Дизайн-токены ссылаются на существующую систему tokens.css
- [x] Анимации и переходы специфицированы с timing и easing
- [x] Клавиатурная навигация полностью описана (12 клавиш)
- [x] Адаптивное поведение для 3 breakpoints + mobile bottom sheet
- [x] Accessibility: ARIA attributes, focus management, contrast ratios
- [x] Тёмная тема: override tokens + инвертированные selection цвета
- [x] Локализация: форматы дат, первый день недели, переводы
- [x] Figma structure: иерархия компонентов, variant properties
- [x] Usage guidelines: DO/DON'T
- [x] Props interface (TypeScript)
- [x] Pixel-perfect размеры для обоих sizes
