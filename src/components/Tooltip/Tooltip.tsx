import React from 'react';
import styles from './Tooltip.module.css';

export interface TooltipProps {
  children: React.ReactNode;
  text: string;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  visible?: boolean;
  className?: string;
}

export const Tooltip: React.FC<TooltipProps> = ({
  children,
  text,
  placement = 'top',
  visible,
  className,
}) => {
  const tooltipClasses = [
    styles.tooltip,
    styles[placement],
    visible ? styles.visible : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={styles.wrapper}>
      {children}
      <div className={tooltipClasses} role="tooltip">
        {text}
      </div>
    </div>
  );
};
