import React from 'react';
import styles from './Divider.module.css';

export interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
  text?: string;
  className?: string;
}

export const Divider: React.FC<DividerProps> = ({
  orientation = 'horizontal',
  text,
  className,
}) => {
  if (!text) {
    return (
      <hr
        className={[
          styles.divider,
          orientation === 'horizontal' ? styles.horizontal : styles.vertical,
          className,
        ]
          .filter(Boolean)
          .join(' ')}
      />
    );
  }

  return (
    <div
      className={[
        styles.wrapper,
        orientation === 'vertical' ? styles.verticalWrapper : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      role="separator"
    >
      <div className={styles.line} />
      <span className={styles.text}>{text}</span>
      <div className={styles.line} />
    </div>
  );
};
