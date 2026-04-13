import React, { useState, useRef } from 'react';
import { SearchIcon } from '../../assets/icons';
import { Hint } from '../Hint';
import styles from './TextInput.module.css';

export type TextInputSize = 'L' | 'M';

export interface TextInputProps {
  /** Input size variant */
  size?: TextInputSize;
  /** Label text */
  label?: string;
  /** Placeholder text (visible when focused) */
  placeholder?: string;
  /** Current value */
  value?: string;
  /** Hint text below the input */
  hint?: string;
  /** Show hint */
  showHint?: boolean;
  /** Error state */
  error?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Show right search icon */
  showRightIcon?: boolean;
  /** Show left icon */
  showLeftIcon?: boolean;
  /** Show inline button */
  showButton?: boolean;
  /** Button text */
  buttonText?: string;
  /** onChange handler */
  onChange?: (value: string) => void;
  /** onFocus handler */
  onFocus?: () => void;
  /** onBlur handler */
  onBlur?: () => void;
  /** Additional class */
  className?: string;
}

export const TextInput: React.FC<TextInputProps> = ({
  size = 'L',
  label = 'Label',
  placeholder = 'Placeholder',
  value: controlledValue,
  hint = 'Hint',
  showHint = true,
  error = false,
  disabled = false,
  showRightIcon = true,
  showLeftIcon = false,
  showButton = false,
  buttonText = 'Edit',
  onChange,
  onFocus,
  onBlur,
  className,
}) => {
  const [internalValue, setInternalValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const value = controlledValue ?? internalValue;
  const hasContent = value.length > 0;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        onClick={() => !disabled && inputRef.current?.focus()}
      >
        {showLeftIcon && (
          <div className={styles.iconLeft}>
            <SearchIcon size={24} />
          </div>
        )}

        <div className={styles.content}>
          <label
            className={`${styles.label} ${showFloatingLabel ? styles.labelFloating : ''}`}
          >
            {label}
          </label>
          <input
            ref={inputRef}
            className={`${styles.input} ${!showFloatingLabel ? styles.inputHidden : ''}`}
            type="text"
            value={value}
            placeholder={isFocused && !hasContent ? placeholder : ''}
            disabled={disabled}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>

        {showRightIcon && (
          <div className={styles.iconRight}>
            <SearchIcon size={24} />
          </div>
        )}

        {showButton && (
          <button className={styles.inlineButton} type="button" disabled={disabled}>
            {buttonText}
          </button>
        )}
      </div>

      {showHint && <Hint text={hint} error={error} showIcon={error} />}
    </div>
  );
};
