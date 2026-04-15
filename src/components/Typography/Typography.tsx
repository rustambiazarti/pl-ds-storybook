import React from 'react';
import styles from './Typography.module.css';

/* ==========================================================================
   Types
   ========================================================================== */

export type TypographyVariant =
  /* Title */
  | 'title-4xl'
  | 'title-3xl'
  | 'title-2xl'
  | 'title-xl'
  | 'title-lg'
  | 'title-base'
  | 'title-sm'
  /* Body Short */
  | 'body-short-lg'
  | 'body-short-base'
  | 'body-short-sm'
  | 'body-short-sm-strong'
  | 'body-short-caption'
  | 'body-short-caption-strong'
  /* Body Long */
  | 'body-long-lg'
  | 'body-long-base'
  | 'body-long-sm'
  | 'body-long-caption';

export type TypographyLang = 'en' | 'ar' | 'ru' | 'el';

export interface TypographyProps {
  /** Typography variant */
  variant?: TypographyVariant;
  /** Language — determines font family */
  lang?: TypographyLang;
  /** Use accent font (for title variants) */
  accent?: boolean;
  /** HTML element to render */
  as?: keyof JSX.IntrinsicElements;
  /** Text color override */
  color?: 'primary' | 'secondary' | 'highlight' | 'inverse';
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

/* ==========================================================================
   Helpers
   ========================================================================== */

const langClass: Record<TypographyLang, string> = {
  en: '',
  ru: styles.langRu,
  ar: styles.langAr,
  el: styles.langEl,
};

const colorVar: Record<string, string> = {
  primary: 'var(--content-primary)',
  secondary: 'var(--content-secondary)',
  highlight: 'var(--content-highlight)',
  inverse: 'var(--content-pure-inverse)',
};

function defaultTag(variant: TypographyVariant): keyof JSX.IntrinsicElements {
  if (variant.startsWith('title-4xl') || variant.startsWith('title-3xl')) return 'h1';
  if (variant.startsWith('title-2xl') || variant.startsWith('title-xl')) return 'h2';
  if (variant.startsWith('title-lg')) return 'h3';
  if (variant.startsWith('title-base')) return 'h4';
  if (variant.startsWith('title-sm')) return 'h5';
  return 'p';
}

/* ==========================================================================
   Component
   ========================================================================== */

export const Typography: React.FC<TypographyProps> = ({
  variant = 'body-short-base',
  lang = 'en',
  accent = false,
  as,
  color,
  children,
  className,
  style,
}) => {
  const Tag = as || defaultTag(variant);

  const classes = [
    styles.text,
    styles[variant],
    langClass[lang],
    accent ? styles.accent : '',
    className ?? '',
  ].filter(Boolean).join(' ');

  const inlineStyle: React.CSSProperties = {
    ...style,
    ...(color ? { color: colorVar[color] } : {}),
  };

  return (
    <Tag className={classes} style={Object.keys(inlineStyle).length ? inlineStyle : undefined} dir={lang === 'ar' ? 'rtl' : undefined}>
      {children}
    </Tag>
  );
};
