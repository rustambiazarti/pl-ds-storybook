import React, { useState, useRef, useEffect, useCallback } from 'react';
import { CalendarIcon, ClearIcon } from '../../assets/icons';
import { Hint } from '../Hint';
import { Calendar } from './Calendar';
import type { CalendarSize, QuickSelectOption } from './Calendar';
import styles from './Calendar.module.css';

export interface DatePickerProps {
  size?: CalendarSize;
  label?: string;
  placeholder?: string;
  value?: Date | null;
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
  onChange?: (date: Date | null) => void;
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

export const DatePicker: React.FC<DatePickerProps> = ({
  size = 'L',
  label = 'Дата',
  placeholder = 'ДД.ММ.ГГГГ',
  value = null,
  hint,
  showHint = false,
  error = false,
  disabled = false,
  minDate,
  maxDate,
  disabledDates,
  locale = 'ru-RU',
  firstDayOfWeek = 1,
  quickSelect = false,
  quickSelectOptions,
  dateFormat,
  onChange,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const hasValue = !!value;
  const formattedValue = formatDate(value, locale, dateFormat);

  const handleToggle = useCallback(() => {
    if (!disabled) setIsOpen((prev) => !prev);
  }, [disabled]);

  const handleClear = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    onChange?.(null);
  }, [onChange]);

  const handleDateChange = useCallback((date: Date | null) => {
    onChange?.(date);
    setIsOpen(false);
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

  const inputClasses = [
    styles.pickerInput,
    size === 'L' ? styles.sizeL : styles.sizeM,
    isOpen ? styles.pickerOpen : '',
    error ? styles.pickerError : '',
    disabled ? styles.pickerDisabled : '',
  ].filter(Boolean).join(' ');

  const labelClasses = [
    styles.pickerLabel,
    hasValue || isOpen ? styles.pickerLabelFloating : '',
  ].filter(Boolean).join(' ');

  return (
    <div className={`${styles.pickerWrapper} ${className ?? ''}`} ref={wrapperRef}>
      <div
        className={inputClasses}
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
          <span className={labelClasses}>{label}</span>
          {(hasValue || isOpen) && (
            <span className={`${styles.pickerValue} ${!hasValue ? styles.pickerPlaceholder : ''}`}>
              {hasValue ? formattedValue : placeholder}
            </span>
          )}
        </div>
        {hasValue && !disabled && (
          <button className={styles.pickerClear} onClick={handleClear} type="button" aria-label="Очистить">
            <ClearIcon size={16} />
          </button>
        )}
      </div>

      {isOpen && (
        <Calendar
          type="single"
          display="dropdown"
          size={size}
          value={value}
          minDate={minDate}
          maxDate={maxDate}
          disabledDates={disabledDates}
          locale={locale}
          firstDayOfWeek={firstDayOfWeek}
          quickSelect={quickSelect}
          quickSelectOptions={quickSelectOptions}
          onChange={handleDateChange}
        />
      )}

      {showHint && hint && <Hint text={hint} error={error} showIcon={error} />}
    </div>
  );
};
