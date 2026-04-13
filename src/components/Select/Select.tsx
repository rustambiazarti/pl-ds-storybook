import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronDownIcon } from '../../assets/icons';
import styles from './Select.module.css';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps {
  options: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
  placeholder?: string;
  size?: 'L' | 'M';
  disabled?: boolean;
  error?: boolean;
  hint?: string;
  className?: string;
}

export const Select: React.FC<SelectProps> = ({
  options,
  value,
  onChange,
  label,
  placeholder = 'Select...',
  size = 'L',
  disabled = false,
  error = false,
  hint,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((o) => o.value === value);
  const hasValue = !!selectedOption;

  const handleToggle = useCallback(() => {
    if (!disabled) setIsOpen((prev) => !prev);
  }, [disabled]);

  const handleSelect = useCallback(
    (optionValue: string) => {
      onChange?.(optionValue);
      setIsOpen(false);
    },
    [onChange]
  );

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const triggerClasses = [
    styles.trigger,
    size === 'L' ? styles.sizeL : styles.sizeM,
    label ? styles.hasLabel : '',
    isOpen ? styles.triggerOpen : '',
    error ? styles.error : '',
    disabled ? styles.disabled : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const labelClasses = [
    styles.label,
    hasValue || isOpen ? styles.labelFloated : styles.labelResting,
  ].join(' ');

  return (
    <div className={styles.wrapper} ref={wrapperRef}>
      <button
        className={triggerClasses}
        onClick={handleToggle}
        disabled={disabled}
        type="button"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        {label && <span className={labelClasses}>{label}</span>}
        <span
          className={`${styles.value} ${!hasValue ? styles.placeholder : ''}`}
        >
          {hasValue ? selectedOption.label : label ? '' : placeholder}
        </span>
        <span
          className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}
        >
          <ChevronDownIcon size={16} />
        </span>
      </button>

      {isOpen && (
        <div className={styles.dropdown} role="listbox">
          {options.map((option) => (
            <button
              key={option.value}
              className={[
                styles.option,
                option.value === value ? styles.optionSelected : '',
                option.disabled ? styles.optionDisabled : '',
              ]
                .filter(Boolean)
                .join(' ')}
              onClick={() =>
                !option.disabled && handleSelect(option.value)
              }
              role="option"
              aria-selected={option.value === value}
              disabled={option.disabled}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}

      {hint && (
        <div
          className={styles.hint}
          style={{ color: error ? 'var(--accent-alert)' : 'var(--content-secondary)', fontSize: 12, lineHeight: '18px' }}
        >
          {hint}
        </div>
      )}
    </div>
  );
};
