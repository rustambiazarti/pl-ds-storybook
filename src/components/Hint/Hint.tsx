import React from 'react';
import { ErrorIcon } from '../../assets/icons';
import styles from './Hint.module.css';

export interface HintProps {
  /** Hint text */
  text?: string;
  /** Show error icon */
  showIcon?: boolean;
  /** Error variant (red text) */
  error?: boolean;
  /** Additional class name */
  className?: string;
}

export const Hint: React.FC<HintProps> = ({
  text = 'Hint',
  showIcon = false,
  error = false,
  className,
}) => {
  return (
    <div
      className={`${styles.hint} ${error ? styles.error : ''} ${className ?? ''}`}
    >
      {showIcon && (
        <ErrorIcon size={16} className={styles.icon} />
      )}
      <span className={styles.text}>{text}</span>
    </div>
  );
};
