import React from 'react';
import styles from './Avatar.module.css';

export type AvatarSize = 'XL' | 'L' | 'M' | 'S' | 'XS';

export interface AvatarProps {
  /** Image URL */
  src?: string;
  /** Alt text / user name for initials */
  name?: string;
  /** Size */
  size?: AvatarSize;
  /** Online status indicator */
  status?: 'online' | 'offline' | 'away' | 'none';
  /** Additional class */
  className?: string;
}

function getInitials(name: string): string {
  return name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  name = 'User',
  size = 'M',
  status = 'none',
  className,
}) => {
  const classes = [
    styles.avatar,
    styles[`size-${size}`],
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes}>
      {src ? (
        <img className={styles.image} src={src} alt={name} />
      ) : (
        <span className={styles.initials}>{getInitials(name)}</span>
      )}
      {status !== 'none' && (
        <span className={`${styles.statusDot} ${styles[`status-${status}`]}`} />
      )}
    </div>
  );
};
