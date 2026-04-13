import React, { useState, useEffect } from 'react';
import styles from './Checkbox.module.css';

export type CheckboxSize = 'M' | 'S';

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

const CheckIconM = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12.7196 3.21961C13.0125 2.92676 13.4873 2.92684 13.7802 3.21961C14.0731 3.51251 14.0731 3.98727 13.7802 4.28016L6.78016 11.2802C6.48726 11.5731 6.0125 11.5731 5.71961 11.2802L2.21961 7.78016C1.92684 7.48726 1.92676 7.01247 2.21961 6.71961C2.51247 6.42676 2.98726 6.42684 3.28016 6.71961L6.24988 9.68934L12.7196 3.21961Z"
      fill="currentColor"
    />
  </svg>
);

const CheckIconS = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M9.29671 2.21963C9.58958 1.92676 10.0644 1.92682 10.3573 2.21963C10.6502 2.51252 10.6502 2.98728 10.3573 3.28018L5.43441 8.20303C5.14151 8.49587 4.66674 8.49591 4.37386 8.20303L2.21956 6.04971C1.92679 5.75686 1.92684 5.28205 2.21956 4.98916C2.51243 4.69629 2.98721 4.69634 3.28011 4.98916L4.90316 6.61221L9.29671 2.21963Z"
      fill="currentColor"
    />
  </svg>
);

const MinusIconM = () => (
  <svg width="10" height="2" viewBox="0 0 10 2" fill="none">
    <rect width="10" height="2" rx="1" fill="currentColor" />
  </svg>
);

const MinusIconS = () => (
  <svg width="8" height="2" viewBox="0 0 8 2" fill="none">
    <rect width="8" height="2" rx="1" fill="currentColor" />
  </svg>
);

export const Checkbox: React.FC<CheckboxProps> = ({
  checked: checkedProp = false,
  indeterminate = false,
  label,
  size = 'M',
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
        <span className={styles.icon} style={{ visibility: (checked || indeterminate) ? 'visible' : 'hidden' }}>
          {indeterminate
            ? (size === 'M' ? <MinusIconM /> : <MinusIconS />)
            : (size === 'M' ? <CheckIconM /> : <CheckIconS />)
          }
        </span>
      </span>
      {label && <span className={`${styles.label} ${styles[`label-${size}`]}`}>{label}</span>}
    </label>
  );
};
