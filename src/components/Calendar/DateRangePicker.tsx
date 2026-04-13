import React, { useState, useRef, useEffect, useCallback } from 'react';
import { CalendarIcon, ClearIcon } from '../../assets/icons';
import { Hint } from '../Hint';
import { Calendar } from './Calendar';
import type { CalendarSize, QuickSelectOption } from './Calendar';
import styles from './Calendar.module.css';

export interface DateRangePickerProps {
  size?: CalendarSize;
  startLabel?: string;
  endLabel?: string;
  startPlaceholder?: string;
  endPlaceholder?: string;
  value?: { start: Date | null; end: Date | null };
  hint?: string;
  showHint?: boolean;
  error?: boolean;
  disabled?: boolean;
  minDate?: Date;
  maxDate?: Date;
  disabledDates?: Date[];
  locale?: string;
  firstDayOfWeek?: 0 | 1;
  quickSelect?: boolean;
  quickSelectOptions?: QuickSelectOption[];
  dateFormat?: string;
  onChange?: (range: { start: Date | null; end: Date | null }) => void;
  className?: string;
}

function formatDate(date: Date | null, locale: string, format?: string): string {
  if (!date) return '';
  if (format) {
    return format
      .replace('DD', String(date.getDate()).padStart(2, '0'))
      .replace('MM', String(date.getMonth() + 1).padStart(2, '0'))
      .replace('YYYY', String(date.getFullYear()));
  }
  return date.toLocaleDateString(locale, { day: '2-digit', month: '2-digit', year: 'numeric' });
}

export const DateRangePicker: React.FC<DateRangePickerProps> = ({
  size = 'L',
  startLabel = 'Начало',
  endLabel = 'Конец',
  startPlaceholder = 'ДД.ММ.ГГГГ',
  endPlaceholder = 'ДД.ММ.ГГГГ',
  value = { start: null, end: null },
  hint,
  showHint = false,
  error = false,
  disabled = false,
  minDate,
  maxDate,
  disabledDates,
  locale = 'ru-RU',
  firstDayOfWeek = 1,
  quickSelect = true,
  quickSelectOptions,
  dateFormat,
  onChange,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const hasStart = !!value.start;
  const hasEnd = !!value.end;

  const handleToggle = useCallback(() => {
    if (!disabled) setIsOpen((prev) => !prev);
  }, [disabled]);

  const handleClear = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    onChange?.({ start: null, end: null });
  }, [onChange]);

  const handleRangeChange = useCallback((range: { start: Date | null; end: Date | null }) => {
    onChange?.(range);
    if (range.start && range.end) {
      setIsOpen(false);
    }
  }, [onChange]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) setIsOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const inputClass = (isActive: boolean) =>
    [
      styles.pickerInput,
      size === 'L' ? styles.sizeL : styles.sizeM,
      isOpen && isActive ? styles.pickerOpen : '',
      error ? styles.pickerError : '',
      disabled ? styles.pickerDisabled : '',
    ].filter(Boolean).join(' ');

  return (
    <div className={`${styles.pickerWrapper} ${className ?? ''}`} ref={wrapperRef}>
      <div className={styles.rangeInputs}>
        {/* Start input */}
        <div
          className={inputClass(true)}
          onClick={handleToggle}
          role="combobox"
          aria-expanded={isOpen}
          aria-haspopup="dialog"
          tabIndex={disabled ? -1 : 0}
          onKeyDown={(e) => {
            if ((e.key === 'Enter' || e.key === ' ') && !disabled) {
              e.preventDefault();
              handleToggle();
            }
          }}
        >
          <div className={styles.pickerIconLeft}>
            <CalendarIcon size={20} />
          </div>
          <div className={styles.pickerContent}>
            <span className={`${styles.pickerLabel} ${hasStart || isOpen ? styles.pickerLabelFloating : ''}`}>
              {startLabel}
            </span>
            {(hasStart || isOpen) && (
              <span className={`${styles.pickerValue} ${!hasStart ? styles.pickerPlaceholder : ''}`}>
                {hasStart ? formatDate(value.start, locale, dateFormat) : startPlaceholder}
              </span>
            )}
          </div>
        </div>

        <span className={styles.rangeSeparator}>—</span>

        {/* End input */}
        <div
          className={inputClass(false)}
          onClick={handleToggle}
          tabIndex={disabled ? -1 : 0}
        >
          <div className={styles.pickerIconLeft}>
            <CalendarIcon size={20} />
          </div>
          <div className={styles.pickerContent}>
            <span className={`${styles.pickerLabel} ${hasEnd || isOpen ? styles.pickerLabelFloating : ''}`}>
              {endLabel}
            </span>
            {(hasEnd || isOpen) && (
              <span className={`${styles.pickerValue} ${!hasEnd ? styles.pickerPlaceholder : ''}`}>
                {hasEnd ? formatDate(value.end, locale, dateFormat) : endPlaceholder}
              </span>
            )}
          </div>
        </div>

        {(hasStart || hasEnd) && !disabled && (
          <button className={styles.pickerClear} onClick={handleClear} type="button" aria-label="Очистить" style={{ alignSelf: 'center' }}>
            <ClearIcon size={16} />
          </button>
        )}
      </div>

      {isOpen && (
        <Calendar
          type="range"
          display="dropdown"
          size={size}
          months={2}
          range={value}
          minDate={minDate}
          maxDate={maxDate}
          disabledDates={disabledDates}
          locale={locale}
          firstDayOfWeek={firstDayOfWeek}
          quickSelect={quickSelect}
          quickSelectOptions={quickSelectOptions}
          onRangeChange={handleRangeChange}
        />
      )}

      {showHint && hint && <Hint text={hint} error={error} showIcon={error} />}
    </div>
  );
};
