import React from 'react';
import { iconData } from './iconData';
import type { IconName } from './iconData';

export type IconSize = 24 | 20 | 16 | 12;
export type IconVariant = 'outline' | 'filled';

export interface IconProps {
  /** Icon name in "Category/Name" format */
  name: IconName;
  /** Size in px */
  size?: IconSize;
  /** Variant — outline (default) or filled */
  variant?: IconVariant;
  /** Color — inherits from parent by default */
  color?: string;
  /** Additional class */
  className?: string;
  /** Accessible label */
  'aria-label'?: string;
}

export const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  variant = 'outline',
  color,
  className,
  'aria-label': ariaLabel,
}) => {
  const iconVariants = iconData[name];
  if (!iconVariants) return null;

  // Determine which variant key to use
  const sizeKey = size <= 16 ? '16' : '24';
  const variantKey = variant === 'filled' ? `${sizeKey}-filled` : sizeKey;

  // Try exact match first, then fall back to size-only, then to '24'
  const data =
    iconVariants[variantKey as keyof typeof iconVariants] ||
    iconVariants[sizeKey as keyof typeof iconVariants] ||
    iconVariants['24'];

  if (!data) return null;

  return (
    <svg
      width={size}
      height={size}
      viewBox={data.viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={color ? { color } : undefined}
      role={ariaLabel ? 'img' : 'presentation'}
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
      dangerouslySetInnerHTML={{ __html: data.paths }}
    />
  );
};
