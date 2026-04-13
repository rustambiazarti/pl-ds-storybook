import React, { useState } from 'react';
import styles from './Tabs.module.css';

export type TabsSize = 'L' | 'M';

export interface TabItem {
  /** Unique key */
  key: string;
  /** Tab label */
  label: string;
  /** Disabled */
  disabled?: boolean;
}

export interface TabsProps {
  /** Tab items */
  items: TabItem[];
  /** Currently active tab key */
  activeKey?: string;
  /** Size */
  size?: TabsSize;
  /** Full width tabs */
  fullWidth?: boolean;
  /** onChange handler */
  onChange?: (key: string) => void;
  /** Additional class */
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  items,
  activeKey: controlledKey,
  size = 'L',
  fullWidth = false,
  onChange,
  className,
}) => {
  const [internalKey, setInternalKey] = useState(items[0]?.key ?? '');
  const activeKey = controlledKey ?? internalKey;

  const handleClick = (key: string, disabled?: boolean) => {
    if (disabled) return;
    setInternalKey(key);
    onChange?.(key);
  };

  return (
    <div
      className={`${styles.tabs} ${styles[`size-${size}`]} ${fullWidth ? styles.fullWidth : ''} ${className ?? ''}`}
    >
      {items.map((item) => {
        const isActive = item.key === activeKey;
        const tabClasses = [
          styles.tab,
          isActive ? styles.active : '',
          item.disabled ? styles.disabled : '',
        ]
          .filter(Boolean)
          .join(' ');

        return (
          <button
            key={item.key}
            className={tabClasses}
            onClick={() => handleClick(item.key, item.disabled)}
            disabled={item.disabled}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
};
