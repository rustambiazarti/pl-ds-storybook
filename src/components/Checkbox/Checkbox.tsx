import React, { useState, useEffect } from 'react';
import styles from './Checkbox.module.css';

export type CheckboxSize = 'L' | 'M';

export interface CheckboxProps {
  /** Checked state */
  checked?: boolean;
  /** Indeterminate state */
  indeterminate?: boolean;
  /** Label text */
  label?: string;
  /** Size */
  size?: CheckboxSize;
  /** Disabled */
  disabled?: boolean;
  /** Error */
  error?: boolean;
  /** onChange handler */
  onChange?: (checked: boolean) => void;
  /** Additional class */
  className?: string;
}

const CheckIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path
      d="M2.5 6L5 8.5L9.5 3.5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const MinusIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path
      d="M3 6H9"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

export const Checkbox: React.FC<CheckboxProps> = ({
  checked: checkedProp = false,
  indeterminate = false,
  label,
  size = 'L',
  disabled = false,
  error = false,
  onChange,
  className,
}) => {
  const [internalChecked, setInternalChecked] = useState(checkedProp);

  useEffect(() => {
    setInternalChecked(checkedProp);
  }, [checkedProp]);

  const checked = internalChecked;

  const handleClick = () => {
    if (disabled) return;
    const next = !checked;
    setInternalChecked(next);
    onChange?.(next);
  };

  const boxClasses = [
    styles.box,
    styles[`size-${size}`],
    checked || indeterminate ? styles.active : '',
    error ? styles.error : '',
    disabled ? styles.disabled : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <label
      className={`${styles.wrapper} ${disabled ? styles.disabled : ''} ${className ?? ''}`}
      onClick={handleClick}
    >
      <span className={boxClasses}>
        {(checked || indeterminate) && (
          <span className={styles.icon}>
            {indeterminate ? <MinusIcon /> : <CheckIcon />}
          </span>
        )}
      </span>
      {label && <span className={`${styles.label} ${styles[`label-${size}`]}`}>{label}</span>}
    </label>
  );
};
