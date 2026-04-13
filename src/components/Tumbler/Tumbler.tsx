import React, { useState, useEffect } from 'react';
import styles from './Tumbler.module.css';

export type TumblerSize = 'M' | 'S';

export interface TumblerProps {
  /** On/off state */
  checked?: boolean;
  /** Label text */
  label?: string;
  /** Size */
  size?: TumblerSize;
  /** Disabled */
  disabled?: boolean;
  /** onChange handler */
  onChange?: (checked: boolean) => void;
  /** Additional class */
  className?: string;
}

export const Tumbler: React.FC<TumblerProps> = ({
  checked: checkedProp = false,
  label,
  size = 'M',
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
      className={`${styles.wrapper} ${styles[`gap-${size}`]} ${disabled ? styles.wrapperDisabled : ''} ${className ?? ''}`}
      onClick={handleClick}
    >
      <span className={trackClasses}>
        <span className={styles.thumb} />
        {!checked && !disabled && <span className={styles.insetShadow} />}
      </span>
      {label && <span className={`${styles.label} ${styles[`label-${size}`]} ${disabled ? styles.labelDisabled : ''}`}>{label}</span>}
    </label>
  );
};
