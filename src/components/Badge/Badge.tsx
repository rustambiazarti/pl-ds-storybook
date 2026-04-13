import React from 'react';
import styles from './Badge.module.css';

export type BadgeVariant = 'neutral' | 'primary' | 'success' | 'warning' | 'error';
export type BadgeSize = 'L' | 'M' | 'S';

export interface BadgeProps {
  /** Badge text */
  children: React.ReactNode;
  /** Visual variant */
  variant?: BadgeVariant;
  /** Size */
  size?: BadgeSize;
  /** Dot indicator */
  dot?: boolean;
  /** Additional class */
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'neutral',
  size = 'M',
  dot = false,
  className,
}) => {
  const classes = [
    styles.badge,
    styles[`variant-${variant}`],
    styles[`size-${size}`],
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <span className={classes}>
      {dot && <span className={styles.dot} />}
      <span className={styles.text}>{children}</span>
    </span>
  );
};
