import React, { useState, useMemo, useCallback, useRef, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '../../assets/icons';
import styles from './Calendar.module.css';

/* ---- Types ---- */
export type CalendarSize = 'L' | 'M';
export type CalendarType = 'single' | 'range';
export type CalendarDisplay = 'dropdown' | 'inline';
export type CalendarView = 'days' | 'months' | 'years';

export interface QuickSelectOption {
  label: string;
  getValue: () => Date | { start: Date; end: Date };
}

export interface CalendarProps {
  type?: CalendarType;
  display?: CalendarDisplay;
  size?: CalendarSize;
  months?: 1 | 2;
  value?: Date | null;
  range?: { start: Date | null; end: Date | null };
  minDate?: Date;
  maxDate?: Date;
  disabledDates?: Date[];
  locale?: string;
  firstDayOfWeek?: 0 | 1;
  quickSelect?: boolean;
  quickSelectOptions?: QuickSelectOption[];
  onChange?: (date: Date | null) => void;
  onRangeChange?: (range: { start: Date | null; end: Date | null }) => void;
  className?: string;
}

/* ---- Helpers ---- */
const MONTH_NAMES_RU = [
  'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
  'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь',
];
const MONTH_NAMES_SHORT_RU = [
  'Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн',
  'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек',
];
const WEEKDAYS_RU = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
const WEEKDAYS_EN = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

function getWeekdays(firstDayOfWeek: 0 | 1, locale: string): string[] {
  if (firstDayOfWeek === 1) {
    return locale.startsWith('ru') ? WEEKDAYS_RU : ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
  }
  return locale.startsWith('ru')
    ? ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
    : WEEKDAYS_EN;
}

function getMonthName(month: number, locale: string): string {
  if (locale.startsWith('ru')) return MONTH_NAMES_RU[month];
  const d = new Date(2026, month, 1);
  return d.toLocaleString(locale, { month: 'long' });
}

function getMonthShortName(month: number, locale: string): string {
  if (locale.startsWith('ru')) return MONTH_NAMES_SHORT_RU[month];
  const d = new Date(2026, month, 1);
  return d.toLocaleString(locale, { month: 'short' });
}

function isSameDay(a: Date | null | undefined, b: Date | null | undefined): boolean {
  if (!a || !b) return false;
  return a.getDate() === b.getDate() && a.getMonth() === b.getMonth() && a.getFullYear() === b.getFullYear();
}

function isDateBetween(date: Date, start: Date, end: Date): boolean {
  const d = date.getTime();
  const s = Math.min(start.getTime(), end.getTime());
  const e = Math.max(start.getTime(), end.getTime());
  return d > s && d < e;
}

function isDateDisabled(date: Date, minDate?: Date, maxDate?: Date, disabledDates?: Date[]): boolean {
  if (minDate && date < new Date(minDate.getFullYear(), minDate.getMonth(), minDate.getDate())) return true;
  if (maxDate && date > new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate())) return true;
  if (disabledDates) {
    return disabledDates.some((d) => isSameDay(d, date));
  }
  return false;
}

function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

function getCalendarDays(year: number, month: number, firstDayOfWeek: 0 | 1): Date[] {
  const days: Date[] = [];
  const firstOfMonth = new Date(year, month, 1);
  let startDay = firstOfMonth.getDay(); // 0=Sun

  if (firstDayOfWeek === 1) {
    startDay = startDay === 0 ? 6 : startDay - 1;
  }

  // Previous month fill
  const prevMonth = month === 0 ? 11 : month - 1;
  const prevYear = month === 0 ? year - 1 : year;
  const prevDays = getDaysInMonth(prevYear, prevMonth);
  for (let i = startDay - 1; i >= 0; i--) {
    days.push(new Date(prevYear, prevMonth, prevDays - i));
  }

  // Current month
  const daysInMonth = getDaysInMonth(year, month);
  for (let d = 1; d <= daysInMonth; d++) {
    days.push(new Date(year, month, d));
  }

  // Next month fill (always show 6 rows = 42 cells)
  const remaining = 42 - days.length;
  const nextMonth = month === 11 ? 0 : month + 1;
  const nextYear = month === 11 ? year + 1 : year;
  for (let d = 1; d <= remaining; d++) {
    days.push(new Date(nextYear, nextMonth, d));
  }

  return days;
}

const DEFAULT_QUICK_OPTIONS_SINGLE: QuickSelectOption[] = [
  { label: 'Сегодня', getValue: () => new Date() },
  {
    label: 'Вчера',
    getValue: () => {
      const d = new Date();
      d.setDate(d.getDate() - 1);
      return d;
    },
  },
];

const DEFAULT_QUICK_OPTIONS_RANGE: QuickSelectOption[] = [
  {
    label: 'Сегодня',
    getValue: () => {
      const d = new Date();
      return { start: d, end: d };
    },
  },
  {
    label: '7 дней',
    getValue: () => {
      const end = new Date();
      const start = new Date();
      start.setDate(start.getDate() - 6);
      return { start, end };
    },
  },
  {
    label: '30 дней',
    getValue: () => {
      const end = new Date();
      const start = new Date();
      start.setDate(start.getDate() - 29);
      return { start, end };
    },
  },
  {
    label: 'Этот мес.',
    getValue: () => {
      const now = new Date();
      return { start: new Date(now.getFullYear(), now.getMonth(), 1), end: now };
    },
  },
  {
    label: 'Пред. мес.',
    getValue: () => {
      const now = new Date();
      const start = new Date(now.getFullYear(), now.getMonth() - 1, 1);
      const end = new Date(now.getFullYear(), now.getMonth(), 0);
      return { start, end };
    },
  },
];

/* ---- MonthPanel sub-component ---- */
interface MonthPanelProps {
  year: number;
  month: number;
  size: CalendarSize;
  locale: string;
  firstDayOfWeek: 0 | 1;
  today: Date;
  value?: Date | null;
  rangeStart?: Date | null;
  rangeEnd?: Date | null;
  hoverDate?: Date | null;
  type: CalendarType;
  minDate?: Date;
  maxDate?: Date;
  disabledDates?: Date[];
  showHeader: boolean;
  onPrev?: () => void;
  onNext?: () => void;
  onDayClick: (date: Date) => void;
  onDayHover: (date: Date | null) => void;
  onHeaderClick?: () => void;
  slideDirection?: 'left' | 'right' | null;
  view: CalendarView;
  onMonthSelect?: (month: number) => void;
  onYearSelect?: (year: number) => void;
}

const MonthPanel: React.FC<MonthPanelProps> = ({
  year, month, size, locale, firstDayOfWeek, today, value,
  rangeStart, rangeEnd, hoverDate, type, minDate, maxDate, disabledDates,
  showHeader, onPrev, onNext, onDayClick, onDayHover, onHeaderClick,
  slideDirection, view, onMonthSelect, onYearSelect,
}) => {
  const days = useMemo(() => getCalendarDays(year, month, firstDayOfWeek), [year, month, firstDayOfWeek]);
  const weekdays = useMemo(() => getWeekdays(firstDayOfWeek, locale), [firstDayOfWeek, locale]);

  const effectiveRangeEnd = hoverDate && rangeStart && !rangeEnd ? hoverDate : rangeEnd;

  const gridRef = useRef<HTMLDivElement>(null);
  const slideClass = slideDirection === 'left' ? styles.monthSlideLeft : slideDirection === 'right' ? styles.monthSlideRight : '';

  if (view === 'months') {
    return (
      <div className={styles.monthPanel}>
        {showHeader && (
          <div className={styles.header}>
            {onPrev && (
              <button className={styles.navBtn} onClick={onPrev} aria-label="Предыдущий год" type="button">
                <ChevronLeftIcon size={size === 'L' ? 20 : 18} />
              </button>
            )}
            <button className={styles.headerLabel} onClick={onHeaderClick} type="button">
              {year}
            </button>
            {onNext && (
              <button className={styles.navBtn} onClick={onNext} aria-label="Следующий год" type="button">
                <ChevronRightIcon size={size === 'L' ? 20 : 18} />
              </button>
            )}
          </div>
        )}
        <div className={styles.selectorGrid}>
          {Array.from({ length: 12 }, (_, i) => {
            const isSelected = i === month;
            const isCurrent = i === today.getMonth() && year === today.getFullYear();
            return (
              <button
                key={i}
                className={[
                  styles.selectorCell,
                  isSelected ? styles.selectorCellSelected : '',
                  isCurrent && !isSelected ? styles.dayToday : '',
                ].filter(Boolean).join(' ')}
                onClick={() => onMonthSelect?.(i)}
                type="button"
              >
                {getMonthShortName(i, locale)}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  if (view === 'years') {
    const startYear = Math.floor(year / 12) * 12;
    return (
      <div className={styles.monthPanel}>
        {showHeader && (
          <div className={styles.header}>
            {onPrev && (
              <button className={styles.navBtn} onClick={onPrev} aria-label="Предыдущие 12 лет" type="button">
                <ChevronLeftIcon size={size === 'L' ? 20 : 18} />
              </button>
            )}
            <span className={styles.headerLabel} style={{ cursor: 'default' }}>
              {startYear}–{startYear + 11}
            </span>
            {onNext && (
              <button className={styles.navBtn} onClick={onNext} aria-label="Следующие 12 лет" type="button">
                <ChevronRightIcon size={size === 'L' ? 20 : 18} />
              </button>
            )}
          </div>
        )}
        <div className={styles.selectorGrid}>
          {Array.from({ length: 12 }, (_, i) => {
            const y = startYear + i;
            const isSelected = y === year;
            const isCurrent = y === today.getFullYear();
            return (
              <button
                key={y}
                className={[
                  styles.selectorCell,
                  isSelected ? styles.selectorCellSelected : '',
                  isCurrent && !isSelected ? styles.dayToday : '',
                ].filter(Boolean).join(' ')}
                onClick={() => onYearSelect?.(y)}
                type="button"
              >
                {y}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.monthPanel}>
      {showHeader && (
        <div className={styles.header}>
          {onPrev && (
            <button className={styles.navBtn} onClick={onPrev} aria-label="Предыдущий месяц" type="button">
              <ChevronLeftIcon size={size === 'L' ? 20 : 18} />
            </button>
          )}
          <button className={styles.headerLabel} onClick={onHeaderClick} type="button">
            {getMonthName(month, locale)} {year}
          </button>
          {onNext && (
            <button className={styles.navBtn} onClick={onNext} aria-label="Следующий месяц" type="button">
              <ChevronRightIcon size={size === 'L' ? 20 : 18} />
            </button>
          )}
        </div>
      )}

      <div className={styles.weekdayRow}>
        {weekdays.map((wd, i) => (
          <div key={i} className={styles.weekdayCell} role="columnheader">
            {wd}
          </div>
        ))}
      </div>

      <div className={`${styles.daysGrid} ${slideClass}`} ref={gridRef} role="grid" key={`${year}-${month}`}>
        {days.map((date, i) => {
          const isCurrentMonth = date.getMonth() === month;
          const isToday = isSameDay(date, today);
          const isSelected = type === 'single' && isSameDay(date, value);
          const isRangeStart = type === 'range' && isSameDay(date, rangeStart);
          const isRangeEnd = type === 'range' && isSameDay(date, effectiveRangeEnd);
          const isInRange = type === 'range' && rangeStart && effectiveRangeEnd && isDateBetween(date, rangeStart, effectiveRangeEnd);
          const disabled = isDateDisabled(date, minDate, maxDate, disabledDates);

          const cellClasses = [
            styles.dayCell,
            !isCurrentMonth ? styles.dayOtherMonth : '',
            isToday && !isSelected && !isRangeStart && !isRangeEnd ? styles.dayToday : '',
            isSelected ? styles.daySelected : '',
            isRangeStart ? styles.dayRangeStart : '',
            isRangeEnd && !isRangeStart ? styles.dayRangeEnd : '',
            isRangeStart && isRangeEnd ? `${styles.dayRangeStart} ${styles.dayRangeEnd}` : '',
            isInRange ? styles.dayInRange : '',
            disabled ? styles.dayDisabled : '',
          ].filter(Boolean).join(' ');

          return (
            <button
              key={i}
              className={cellClasses}
              onClick={() => !disabled && onDayClick(date)}
              onMouseEnter={() => !disabled && type === 'range' && onDayHover(date)}
              onMouseLeave={() => type === 'range' && onDayHover(null)}
              disabled={disabled}
              type="button"
              role="gridcell"
              tabIndex={isSelected || isRangeStart || (i === 0 && !value) ? 0 : -1}
              aria-selected={isSelected || isRangeStart || isRangeEnd || undefined}
              aria-disabled={disabled || undefined}
              aria-current={isToday ? 'date' : undefined}
              aria-label={date.toLocaleDateString(locale, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            >
              {date.getDate()}
              {isToday && (isSelected || isRangeStart || isRangeEnd) && (
                <span className={styles.todayDot} />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

/* ---- Calendar main component ---- */
export const Calendar: React.FC<CalendarProps> = ({
  type = 'single',
  display = 'inline',
  size = 'L',
  months = 1,
  value,
  range,
  minDate,
  maxDate,
  disabledDates,
  locale = 'ru-RU',
  firstDayOfWeek = 1,
  quickSelect = false,
  quickSelectOptions,
  onChange,
  onRangeChange,
  className,
}) => {
  const today = useMemo(() => new Date(), []);

  const initialDate = value || range?.start || today;
  const [viewYear, setViewYear] = useState(initialDate.getFullYear());
  const [viewMonth, setViewMonth] = useState(initialDate.getMonth());
  const [hoverDate, setHoverDate] = useState<Date | null>(null);
  const [slideDir, setSlideDir] = useState<'left' | 'right' | null>(null);
  const [view, setView] = useState<CalendarView>('days');

  // Range selection state
  const [rangeStart, setRangeStart] = useState<Date | null>(range?.start || null);
  const [rangeEnd, setRangeEnd] = useState<Date | null>(range?.end || null);

  useEffect(() => {
    if (range) {
      setRangeStart(range.start);
      setRangeEnd(range.end);
    }
  }, [range?.start?.getTime(), range?.end?.getTime()]);

  const goToPrevMonth = useCallback(() => {
    setSlideDir('right');
    if (view === 'years') {
      setViewYear((y) => y - 12);
    } else if (view === 'months') {
      setViewYear((y) => y - 1);
    } else {
      setViewMonth((m) => {
        if (m === 0) {
          setViewYear((y) => y - 1);
          return 11;
        }
        return m - 1;
      });
    }
    setTimeout(() => setSlideDir(null), 260);
  }, [view]);

  const goToNextMonth = useCallback(() => {
    setSlideDir('left');
    if (view === 'years') {
      setViewYear((y) => y + 12);
    } else if (view === 'months') {
      setViewYear((y) => y + 1);
    } else {
      setViewMonth((m) => {
        if (m === 11) {
          setViewYear((y) => y + 1);
          return 0;
        }
        return m + 1;
      });
    }
    setTimeout(() => setSlideDir(null), 260);
  }, [view]);

  const handleDayClick = useCallback((date: Date) => {
    if (type === 'single') {
      onChange?.(date);
    } else {
      // Range logic
      if (!rangeStart || (rangeStart && rangeEnd)) {
        // Start new range
        setRangeStart(date);
        setRangeEnd(null);
        setHoverDate(null);
      } else {
        // Set end
        let start = rangeStart;
        let end = date;
        if (end < start) {
          [start, end] = [end, start];
        }
        setRangeStart(start);
        setRangeEnd(end);
        onRangeChange?.({ start, end });
      }
    }
  }, [type, rangeStart, rangeEnd, onChange, onRangeChange]);

  const handleHeaderClick = useCallback(() => {
    if (view === 'days') setView('months');
    else if (view === 'months') setView('years');
    else setView('days');
  }, [view]);

  const handleMonthSelect = useCallback((m: number) => {
    setViewMonth(m);
    setView('days');
  }, []);

  const handleYearSelect = useCallback((y: number) => {
    setViewYear(y);
    setView('months');
  }, []);

  const handleQuickSelect = useCallback((option: QuickSelectOption) => {
    const val = option.getValue();
    if (val instanceof Date) {
      onChange?.(val);
      setViewYear(val.getFullYear());
      setViewMonth(val.getMonth());
    } else {
      setRangeStart(val.start);
      setRangeEnd(val.end);
      onRangeChange?.(val);
      setViewYear(val.start.getFullYear());
      setViewMonth(val.start.getMonth());
    }
  }, [onChange, onRangeChange]);

  const effectiveQuickOptions = quickSelectOptions || (type === 'single' ? DEFAULT_QUICK_OPTIONS_SINGLE : DEFAULT_QUICK_OPTIONS_RANGE);

  const sizeClass = size === 'L' ? styles.sizeL : styles.sizeM;
  const displayClass = display === 'dropdown' ? styles.dropdown : styles.inline;

  const calendarClasses = [styles.calendar, sizeClass, displayClass, className]
    .filter(Boolean)
    .join(' ');

  const showDualMonth = months === 2 && view === 'days';
  const secondMonth = viewMonth === 11 ? 0 : viewMonth + 1;
  const secondYear = viewMonth === 11 ? viewYear + 1 : viewYear;

  return (
    <div
      className={calendarClasses}
      role={display === 'dropdown' ? 'dialog' : 'grid'}
      aria-label={type === 'single' ? 'Выбор даты' : 'Выбор диапазона дат'}
      aria-modal={display === 'dropdown' ? true : undefined}
    >
      {showDualMonth ? (
        <div className={styles.calendarDual}>
          <MonthPanel
            year={viewYear}
            month={viewMonth}
            size={size}
            locale={locale}
            firstDayOfWeek={firstDayOfWeek}
            today={today}
            value={value}
            rangeStart={rangeStart}
            rangeEnd={rangeEnd}
            hoverDate={hoverDate}
            type={type}
            minDate={minDate}
            maxDate={maxDate}
            disabledDates={disabledDates}
            showHeader={true}
            onPrev={goToPrevMonth}
            onDayClick={handleDayClick}
            onDayHover={setHoverDate}
            onHeaderClick={handleHeaderClick}
            slideDirection={slideDir}
            view={view}
            onMonthSelect={handleMonthSelect}
            onYearSelect={handleYearSelect}
          />
          <MonthPanel
            year={secondYear}
            month={secondMonth}
            size={size}
            locale={locale}
            firstDayOfWeek={firstDayOfWeek}
            today={today}
            value={value}
            rangeStart={rangeStart}
            rangeEnd={rangeEnd}
            hoverDate={hoverDate}
            type={type}
            minDate={minDate}
            maxDate={maxDate}
            disabledDates={disabledDates}
            showHeader={true}
            onNext={goToNextMonth}
            onDayClick={handleDayClick}
            onDayHover={setHoverDate}
            slideDirection={slideDir}
            view="days"
          />
        </div>
      ) : (
        <MonthPanel
          year={viewYear}
          month={viewMonth}
          size={size}
          locale={locale}
          firstDayOfWeek={firstDayOfWeek}
          today={today}
          value={value}
          rangeStart={rangeStart}
          rangeEnd={rangeEnd}
          hoverDate={hoverDate}
          type={type}
          minDate={minDate}
          maxDate={maxDate}
          disabledDates={disabledDates}
          showHeader={true}
          onPrev={goToPrevMonth}
          onNext={goToNextMonth}
          onDayClick={handleDayClick}
          onDayHover={setHoverDate}
          onHeaderClick={handleHeaderClick}
          slideDirection={slideDir}
          view={view}
          onMonthSelect={handleMonthSelect}
          onYearSelect={handleYearSelect}
        />
      )}

      {quickSelect && (
        <div className={styles.quickSelectBar}>
          {effectiveQuickOptions.map((option, i) => (
            <button
              key={i}
              className={styles.quickSelectBtn}
              onClick={() => handleQuickSelect(option)}
              type="button"
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
