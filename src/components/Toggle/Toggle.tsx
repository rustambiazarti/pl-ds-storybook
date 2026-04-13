import React, { useState, useEffect } from 'react';
import styles from './Toggle.module.css';

export type ToggleSize = 'L' | 'M';

export interface ToggleProps {
  /** On/off state */
  checked?: boolean;
  /** Label text */
  label?: string;
  /** Size */
  size?: ToggleSize;
  /** Disabled */
  disabled?: boolean;
  /** onChange handler */
  onChange?: (checked: boolean) => void;
  /** Additional class */
  className?: string;
}

export const Toggle: React.FC<ToggleProps> = ({
  checked: checkedProp = false,
  label,
  size = 'L',
  disabled = false,
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

  const trackClasses = [
    styles.track,
    styles[`size-${size}`],
    checked ? styles.active : '',
    disabled ? styles.disabled : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <label
      className={`${styles.wrapper} ${disabled ? styles.disabled : ''} ${className ?? ''}`}
      onClick={handleClick}
    >
      <span className={trackClasses}>
        <span className={styles.thumb} />
      </span>
      {label && <span className={`${styles.label} ${styles[`label-${size}`]}`}>{label}</span>}
    </label>
  );
};
