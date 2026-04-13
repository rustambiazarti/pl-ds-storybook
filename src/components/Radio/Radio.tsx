import React, { useState, useEffect } from 'react';
import styles from './Radio.module.css';

export type RadioSize = 'L' | 'M';

export interface RadioProps {
  /** Selected state */
  checked?: boolean;
  /** Label text */
  label?: string;
  /** Size */
  size?: RadioSize;
  /** Disabled */
  disabled?: boolean;
  /** Error */
  error?: boolean;
  /** onChange handler */
  onChange?: (checked: boolean) => void;
  /** Additional class */
  className?: string;
}

export const Radio: React.FC<RadioProps> = ({
  checked: checkedProp = false,
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

  const circleClasses = [
    styles.circle,
    styles[`size-${size}`],
    checked ? styles.active : '',
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
      <span className={circleClasses}>
        {checked && <span className={styles.dot} />}
      </span>
      {label && <span className={`${styles.label} ${styles[`label-${size}`]}`}>{label}</span>}
    </label>
  );
};
