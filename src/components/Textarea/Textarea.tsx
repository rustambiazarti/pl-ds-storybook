import React, { useState, useRef } from 'react';
import { Hint } from '../Hint';
import styles from './Textarea.module.css';

export type TextareaSize = 'L' | 'M';

export interface TextareaProps {
  /** Textarea size variant */
  size?: TextareaSize;
  /** Label text */
  label?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Current value */
  value?: string;
  /** Hint text below */
  hint?: string;
  /** Show hint */
  showHint?: boolean;
  /** Error state */
  error?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Allow resize */
  resizable?: boolean;
  /** onChange handler */
  onChange?: (value: string) => void;
  /** onFocus handler */
  onFocus?: () => void;
  /** onBlur handler */
  onBlur?: () => void;
  /** Additional class */
  className?: string;
}

export const Textarea: React.FC<TextareaProps> = ({
  size = 'L',
  label = 'Label',
  placeholder = 'Placeholder',
  value: controlledValue,
  hint = 'Hint',
  showHint = true,
  error = false,
  disabled = false,
  resizable = true,
  onChange,
  onFocus,
  onBlur,
  className,
}) => {
  const [internalValue, setInternalValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const value = controlledValue ?? internalValue;
  const hasContent = value.length > 0;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setInternalValue(newValue);
    onChange?.(newValue);
  };

  const handleFocus = () => {
    setIsFocused(true);
    onFocus?.();
  };

  const handleBlur = () => {
    setIsFocused(false);
    onBlur?.();
  };

  const fieldClasses = [
    styles.field,
    styles[`size-${size}`],
    isFocused && !disabled ? styles.focused : '',
    isHovered && !isFocused && !disabled ? styles.hovered : '',
    error ? styles.error : '',
    disabled ? styles.disabled : '',
    !resizable ? styles.noResize : '',
  ]
    .filter(Boolean)
    .join(' ');

  const showFloatingLabel = isFocused || hasContent;

  return (
    <div
      className={`${styles.wrapper} ${styles[`wrapper-${size}`]} ${className ?? ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={fieldClasses}
        onClick={() => !disabled && textareaRef.current?.focus()}
      >
        <div className={styles.content}>
          <label
            className={`${styles.label} ${showFloatingLabel ? styles.labelFloating : ''}`}
          >
            {label}
          </label>
          <textarea
            ref={textareaRef}
            className={`${styles.textarea} ${!showFloatingLabel && !isFocused ? styles.textareaHidden : ''}`}
            value={value}
            placeholder={isFocused && !hasContent ? placeholder : ''}
            disabled={disabled}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            rows={2}
          />
        </div>
      </div>

      {showHint && <Hint text={hint} error={error} showIcon={error} />}
    </div>
  );
};
