import React from 'react';
import styles from './Table.module.css';
import { Icon } from '../Icons/Icon';
import type { IconName } from '../Icons/iconData';

/* ==========================================================================
   Types
   ========================================================================== */

export type TableSize = 'L' | 'M' | 'S';
export type SortDirection = 'off' | 'asc' | 'desc';

export interface TableProps {
  /** Table size */
  size?: TableSize;
  /** Dark theme */
  dark?: boolean;
  /** Fill header background */
  headerFill?: boolean;
  children?: React.ReactNode;
  className?: string;
}

export interface TableHeaderCellProps {
  /** Size */
  size?: TableSize;
  /** Fill background */
  fill?: boolean;
  /** Sort direction */
  sort?: SortDirection;
  /** Sort click handler */
  onSort?: () => void;
  /** Render as checkbox cell */
  checkbox?: boolean;
  children?: React.ReactNode;
  className?: string;
  /** Minimum width */
  width?: number | string;
}

export interface TableCellProps {
  /** Size */
  size?: TableSize;
  children?: React.ReactNode;
  className?: string;
  /** Minimum width */
  width?: number | string;
}

/* ==========================================================================
   Icons
   ========================================================================== */

const SortIcon: React.FC<{ direction: SortDirection }> = ({ direction }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8 3.5L11 7H5L8 3.5Z"
      fill="currentColor"
      opacity={direction === 'asc' ? 1 : 0.3}
    />
    <path
      d="M8 12.5L5 9H11L8 12.5Z"
      fill="currentColor"
      opacity={direction === 'desc' ? 1 : 0.3}
    />
  </svg>
);


/* ==========================================================================
   Sub-components for cell content
   ========================================================================== */

export const TableTextContent: React.FC<{
  title: string;
  subtitle?: string;
}> = ({ title, subtitle }) => (
  <div className={styles.textContent}>
    <span className={styles.title}>{title}</span>
    {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
  </div>
);

export const TableAvatarContent: React.FC<{
  src?: string;
  name: string;
  subtitle?: string;
}> = ({ src, name, subtitle }) => (
  <div className={styles.avatarContent}>
    {src ? (
      <img className={styles.avatarImage} src={src} alt={name} />
    ) : (
      <span className={styles.avatarInitials}>
        {name.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase()}
      </span>
    )}
    <div className={styles.avatarText}>
      <span className={styles.title}>{name}</span>
      {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
    </div>
  </div>
);

export const TableChipsContent: React.FC<{
  chips: string[];
}> = ({ chips }) => (
  <div className={styles.chipsContent}>
    {chips.map((chip, i) => (
      <span key={i} className={styles.chip}>{chip}</span>
    ))}
  </div>
);

export const TableActionsContent: React.FC<{
  onCopy?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
}> = ({ onCopy, onEdit, onDelete }) => (
  <div className={styles.actionsContent}>
    {onCopy && (
      <button className={styles.actionButton} onClick={onCopy} aria-label="Copy">
        <Icon name={'File/File' as IconName} size={16} variant="filled" />
      </button>
    )}
    {onEdit && (
      <button className={styles.actionButton} onClick={onEdit} aria-label="Edit">
        <Icon name={'Action/Compass' as IconName} size={16} variant="filled" />
      </button>
    )}
    {onDelete && (
      <button className={`${styles.actionButton} ${styles.deleteButton}`} onClick={onDelete} aria-label="Delete">
        <Icon name={'File/Trash' as IconName} size={16} variant="filled" />
      </button>
    )}
  </div>
);

/* ==========================================================================
   Table Header Cell
   ========================================================================== */

export const TableHeaderCell: React.FC<TableHeaderCellProps> = ({
  size = 'M',
  fill = false,
  sort = 'off',
  onSort,
  checkbox,
  children,
  className,
  width,
}) => {
  const classes = [
    styles.headerCell,
    styles[`size${size}`],
    fill ? styles.fill : '',
    checkbox ? styles.checkboxCell : '',
    className ?? '',
  ].filter(Boolean).join(' ');

  return (
    <th className={classes} style={width ? { width, minWidth: width } : undefined}>
      {checkbox ? (
        <span className={styles.checkboxWrap}>{children}</span>
      ) : sort !== undefined && onSort ? (
        <span className={styles.headerInner}>
          {children}
          <button
            className={`${styles.sortButton} ${sort !== 'off' ? styles.sortActive : ''}`}
            onClick={onSort}
          >
            <SortIcon direction={sort} />
          </button>
        </span>
      ) : (
        children
      )}
    </th>
  );
};

/* ==========================================================================
   Table Cell
   ========================================================================== */

export const TableCell: React.FC<TableCellProps> = ({
  size = 'M',
  children,
  className,
  width,
}) => {
  const classes = [
    styles.cell,
    styles[`size${size}`],
    className ?? '',
  ].filter(Boolean).join(' ');

  return (
    <td className={classes} style={width ? { width, minWidth: width } : undefined}>
      {children}
    </td>
  );
};

/* ==========================================================================
   Table
   ========================================================================== */

export const Table: React.FC<TableProps> = ({
  size = 'M',
  dark = false,
  headerFill = true,
  children,
  className,
}) => {
  const classes = [
    styles.table,
    dark ? styles.dark : '',
    className ?? '',
  ].filter(Boolean).join(' ');

  return (
    <div className={styles.scrollContainer}>
      <table className={classes}>
        {React.Children.map(children, (child) => {
          if (!React.isValidElement(child)) return child;
          // Pass size and headerFill down to thead/tbody rows
          return React.cloneElement(child as React.ReactElement<any>, { size, headerFill });
        })}
      </table>
    </div>
  );
};

/* ==========================================================================
   Table Head / Body / Row helpers
   ========================================================================== */

export const TableHead: React.FC<{
  children?: React.ReactNode;
  size?: TableSize;
  headerFill?: boolean;
}> = ({ children, size, headerFill }) => (
  <thead>
    {React.Children.map(children, (child) => {
      if (!React.isValidElement(child)) return child;
      return React.cloneElement(child as React.ReactElement<any>, { size, headerFill });
    })}
  </thead>
);

export const TableBody: React.FC<{
  children?: React.ReactNode;
  size?: TableSize;
}> = ({ children, size }) => (
  <tbody>
    {React.Children.map(children, (child) => {
      if (!React.isValidElement(child)) return child;
      return React.cloneElement(child as React.ReactElement<any>, { size });
    })}
  </tbody>
);

export const TableRow: React.FC<{
  children?: React.ReactNode;
  size?: TableSize;
  headerFill?: boolean;
}> = ({ children, size, headerFill }) => (
  <tr>
    {React.Children.map(children, (child) => {
      if (!React.isValidElement(child)) return child;
      const extra: Record<string, any> = {};
      if (size) extra.size = size;
      if (headerFill !== undefined && (child.type === TableHeaderCell)) extra.fill = headerFill;
      return React.cloneElement(child as React.ReactElement<any>, extra);
    })}
  </tr>
);
