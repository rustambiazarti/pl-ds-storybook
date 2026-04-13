import React from 'react';
import styles from './Button.module.css';

export type ButtonSize = 'L' | 'M' | 'S' | 'XS';
export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonType = 'flexible' | 'fixed' | 'icon-only';

export interface ButtonProps {
  /** Button text */
  children?: React.ReactNode;
  /** Visual style */
  variant?: ButtonVariant;
  /** Size */
  size?: ButtonSize;
  /** Layout type */
  type?: ButtonType;
  /** Disabled state */
  disabled?: boolean;
  /** Loading state */
  loading?: boolean;
  /** Left icon */
  leftIcon?: React.ReactNode;
  /** Right icon */
  rightIcon?: React.ReactNode;
  /** Icon for icon-only variant */
  icon?: React.ReactNode;
  /** Click handler */
  onClick?: () => void;
  /** Additional class */
  className?: string;
}

const Spinner: React.FC<{ size: ButtonSize }> = ({ size }) => {
  const s = size === 'XS' ? 14 : 20;
  return (
    <svg
      className={styles.spinner}
      width={s}
      height={s}
      viewBox="0 0 20 20"
      fill="none"
    >
      <circle
        cx="10"
        cy="10"
        r="8"
        stroke="currentColor"
        strokeOpacity="0.25"
        strokeWidth="2.5"
      />
      <path
        d="M10 2C14.4183 2 18 5.58172 18 10"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const HeartIcon: React.FC<{ size?: number }> = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 16"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M10 16C9.69 16 9.39 15.89 9.15 15.69C8.42 15.05 7.71 14.45 7.09 13.92L7.08 13.91C5.03 12.15 3.25 10.63 2.01 9.13C0.63 7.47 0 5.9 0 4.19C0 2.53 0.56 1.01 1.58 -0.01C2.61 -1.03 4.01 -1.59 5.54 -1.59C6.7 -1.59 7.77 -1.22 8.72 -0.5C9.2 -0.14 9.63 0.3 10 0.81C10.37 0.3 10.8 -0.14 11.28 -0.5C12.23 -1.22 13.3 -1.59 14.46 -1.59C15.99 -1.59 17.39 -1.03 18.42 -0.01C19.44 1.01 20 2.53 20 4.19C20 5.9 19.37 7.47 17.99 9.13C16.75 10.63 14.97 12.15 12.92 13.91C12.3 14.45 11.58 15.05 10.85 15.7C10.61 15.89 10.31 16 10 16Z" />
  </svg>
);

export const Button: React.FC<ButtonProps> = ({
  children = 'Button Text',
  variant = 'primary',
  size = 'L',
  type = 'flexible',
  disabled = false,
  loading = false,
  leftIcon,
  rightIcon,
  icon,
  onClick,
  className,
}) => {
  const isIconOnly = type === 'icon-only';
  const iconSize = size === 'XS' ? 16 : 24;

  const classes = [
    styles.button,
    styles[`variant-${variant}`],
    styles[`size-${size}`],
    styles[`type-${type}`],
    disabled ? styles.disabled : '',
    loading ? styles.loading : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      className={classes}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {loading ? (
        <Spinner size={size} />
      ) : isIconOnly ? (
        <span className={styles.iconWrap} style={{ width: iconSize, height: iconSize }}>
          {icon ?? <HeartIcon size={iconSize - 4} />}
        </span>
      ) : (
        <span className={styles.content}>
          {leftIcon && (
            <span className={styles.iconWrap} style={{ width: iconSize, height: iconSize }}>
              {leftIcon}
            </span>
          )}
          <span className={styles.label}>{children}</span>
          {rightIcon && (
            <span className={styles.iconWrap} style={{ width: iconSize, height: iconSize }}>
              {rightIcon}
            </span>
          )}
        </span>
      )}
    </button>
  );
};
