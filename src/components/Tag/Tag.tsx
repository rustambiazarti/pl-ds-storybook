import React from 'react';
import styles from './Tag.module.css';

const HeartIcon: React.FC<{ color?: string }> = ({ color = 'currentColor' }) => (
  <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M7 11.5C7 11.5 0.5 8 0.5 3.5C0.5 1.84315 1.84315 0.5 3.5 0.5C4.97671 0.5 6.22671 1.43153 6.65139 2.72039C6.79647 3.1608 7.20353 3.1608 7.34861 2.72039C7.77329 1.43153 9.02329 0.5 10.5 0.5C12.1569 0.5 13.5 1.84315 13.5 3.5C13.5 8 7 11.5 7 11.5Z"
      fill={color}
    />
  </svg>
);

export interface TagProps {
  children?: string;
  selected?: boolean;
  disabled?: boolean;
  type?: 'flexible' | 'icon-only';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const Tag: React.FC<TagProps> = ({
  children = 'Text',
  selected = false,
  disabled = false,
  type = 'flexible',
  leftIcon,
  rightIcon,
  icon,
  onClick,
  className,
}) => {
  const isIconOnly = type === 'icon-only';

  const classes = [
    styles.tag,
    isIconOnly ? styles.iconOnly : styles.flexible,
    selected ? styles.selected : '',
    disabled ? styles.disabled : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const iconColor = selected ? '#ffffff' : 'var(--content-primary)';
  const defaultIcon = <HeartIcon color={iconColor} />;

  if (isIconOnly) {
    return (
      <button className={classes} onClick={onClick} disabled={disabled}>
        <span className={styles.icon}>{icon || defaultIcon}</span>
      </button>
    );
  }

  return (
    <button className={classes} onClick={onClick} disabled={disabled}>
      <span className={styles.content}>
        <span className={styles.icon}>{leftIcon || defaultIcon}</span>
        <span className={styles.label}>{children}</span>
        <span className={styles.icon}>{rightIcon || defaultIcon}</span>
      </span>
    </button>
  );
};
