import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Typography } from './Typography';
import type { TypographyVariant, TypographyLang } from './Typography';

const meta = {
  title: 'Foundations/Typography',
  component: Typography,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'title-4xl', 'title-3xl', 'title-2xl', 'title-xl',
        'title-lg', 'title-base', 'title-sm',
        'body-short-lg', 'body-short-base', 'body-short-sm',
        'body-short-sm-strong', 'body-short-caption', 'body-short-caption-strong',
        'body-long-lg', 'body-long-base', 'body-long-sm', 'body-long-caption',
      ],
    },
    lang: { control: 'select', options: ['en', 'ar', 'ru', 'el'] },
    accent: { control: 'boolean' },
    color: { control: 'select', options: ['primary', 'secondary', 'highlight', 'inverse'] },
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

/* ==========================================================================
   Sample text per language
   ========================================================================== */

const sampleText: Record<TypographyLang, Record<string, string>> = {
  en: {
    'title-4xl': 'Title 4xlarge',
    'title-4xl-accent': 'Title 4xlarge ACCENT',
    'title-3xl': 'Title 3xlarge',
    'title-3xl-accent': 'Title 3xlarge ACCENT',
    'title-2xl': 'Title 2xlarge',
    'title-2xl-accent': 'Title 2xlarge Accent',
    'title-xl': 'Title xlarge',
    'title-xl-accent': 'Title xlarge Accent',
    'title-lg-accent': 'Title large Accent',
    'title-lg': 'Title large',
    'title-base': 'Title base',
    'title-sm': 'Title small',
    'body-short-lg': 'Body large',
    'body-short-base': 'Body base',
    'body-short-sm': 'Body small',
    'body-short-sm-strong': 'Body small strong',
    'body-short-caption': 'Body caption',
    'body-short-caption-strong': 'Body caption strong',
    'body-long-lg': 'Body large',
    'body-long-base': 'Body base',
    'body-long-sm': 'Body small',
    'body-long-caption': 'Body caption',
  },
  ru: {
    'title-4xl': '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a 4\u0445',
    'title-4xl-accent': '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a 4\u0445 \u0410\u043a\u0446\u0435\u043d\u0442',
    'title-3xl': '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a 3\u0445',
    'title-3xl-accent': '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a 3\u0445 \u0410\u043a\u0446\u0435\u043d\u0442',
    'title-2xl': '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a 2\u0445',
    'title-2xl-accent': '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a 2\u0445 \u0430\u043a\u0446\u0435\u043d\u0442',
    'title-xl': '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u044d\u043a\u0441\u0442\u0440\u0430 \u0431\u043e\u043b\u044c\u0448\u043e\u0439',
    'title-xl-accent': '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u044d\u043a\u0441\u0442\u0440\u0430 \u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u0410\u043a\u0446\u0435\u043d\u0442',
    'title-lg': '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0431\u043e\u043b\u044c\u0448\u043e\u0439',
    'title-base': '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0431\u0430\u0437\u043e\u0432\u044b\u0439',
    'title-sm': '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u043c\u0430\u043b\u0435\u043d\u044c\u043a\u0438\u0439',
    'body-short-lg': '\u0422\u0435\u043a\u0441\u0442 \u0431\u043e\u043b\u044c\u0448\u043e\u0439',
    'body-short-base': '\u0422\u0435\u043a\u0441\u0442 \u0431\u0430\u0437\u043e\u0432\u044b\u0439',
    'body-short-sm': '\u0422\u0435\u043a\u0441\u0442 \u043c\u0430\u043b\u0435\u043d\u044c\u043a\u0438\u0439',
    'body-short-sm-strong': '\u0422\u0435\u043a\u0441\u0442 \u043c\u0430\u043b\u0435\u043d\u044c\u043a\u0438\u0439 \u0416\u0438\u0440\u043d\u044b\u0439',
    'body-short-caption': '\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439',
    'body-short-caption-strong': '\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439 \u0436\u0438\u0440\u043d\u044b\u0439',
    'body-long-lg': '\u0422\u0435\u043a\u0441\u0442 \u0431\u043e\u043b\u044c\u0448\u043e\u0439',
    'body-long-base': '\u0422\u0435\u043a\u0441\u0442 \u0431\u0430\u0437\u043e\u0432\u044b\u0439',
    'body-long-sm': '\u0422\u0435\u043a\u0441\u0442 \u043c\u0430\u043b\u0435\u043d\u044c\u043a\u0438\u0439',
    'body-long-caption': '\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439',
  },
  ar: {
    'title-4xl': '\u0627\u0644\u0639\u0646\u0648\u0627\u0646 4x \u0643\u0628\u064a\u0631',
    'title-4xl-accent': '\u0627\u0644\u0639\u0646\u0648\u0627\u0646 4x \u0643\u0628\u064a\u0631 \u0627\u0644\u0645\u0645\u064a\u0632',
    'title-3xl': '\u0627\u0644\u0639\u0646\u0648\u0627\u0646 3x \u0643\u0628\u064a\u0631',
    'title-3xl-accent': '\u0627\u0644\u0639\u0646\u0648\u0627\u0646 3x \u0643\u0628\u064a\u0631 \u0627\u0644\u0645\u0645\u064a\u0632',
    'title-2xl': '\u0627\u0644\u0639\u0646\u0648\u0627\u0646 2x \u0643\u0628\u064a\u0631',
    'title-2xl-accent': '\u0627\u0644\u0639\u0646\u0648\u0627\u0646 2x \u0643\u0628\u064a\u0631 \u0627\u0644\u0645\u0645\u064a\u0632',
    'title-xl': '\u0627\u0644\u0639\u0646\u0648\u0627\u0646 x \u0643\u0628\u064a\u0631',
    'title-xl-accent': '\u0627\u0644\u0639\u0646\u0648\u0627\u0646 x \u0643\u0628\u064a\u0631 \u0627\u0644\u0645\u0645\u064a\u0632',
    'title-lg-accent': '\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0643\u0628\u064a\u0631 \u0627\u0644\u0645\u0645\u064a\u0632',
    'title-lg': '\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0643\u0628\u064a\u0631',
    'title-base': '\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0623\u0633\u0627\u0633\u064a',
    'title-sm': '\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0635\u063a\u064a\u0631',
    'body-short-lg': '\u062c\u0633\u0645 \u0643\u0628\u064a\u0631',
    'body-short-base': '\u062c\u0633\u0645 \u0623\u0633\u0627\u0633\u064a',
    'body-short-sm': '\u062c\u0633\u0645 \u0635\u063a\u064a\u0631',
    'body-short-sm-strong': '\u0627\u0644\u0646\u0635 \u0635\u063a\u064a\u0631',
    'body-short-caption': '\u062c\u0633\u0645 \u0634\u0631\u062d',
    'body-short-caption-strong': '\u062c\u0633\u0645 \u0634\u0631\u062d \u0642\u0648\u064a',
    'body-long-lg': '\u062c\u0633\u0645 \u0623\u0633\u0627\u0633\u064a',
    'body-long-base': '\u062c\u0633\u0645 \u0623\u0633\u0627\u0633\u064a',
    'body-long-sm': '\u062c\u0633\u0645 \u0635\u063a\u064a\u0631',
    'body-long-caption': '\u062c\u0633\u0645 \u0634\u0631\u062d',
  },
  el: {
    'title-4xl': '\u03a4\u03af\u03c4\u03bb\u03bf\u03c2 \u03c4\u03b5\u03c1\u03ac\u03c3\u03c4\u03b9\u03bf\u03c2',
    'title-4xl-accent': '\u03a4\u03af\u03c4\u03bb\u03bf\u03c2 \u03c4\u03b5\u03c1\u03ac\u03c3\u03c4\u03b9\u03bf\u03c2 \u03c4\u03cc\u03bd\u03bf\u03c2',
    'title-3xl': '\u03a4\u03af\u03c4\u03bb\u03bf\u03c2 \u03c0\u03bf\u03bb\u03cd \u03bc\u03b5\u03b3\u03ac\u03bb\u03bf\u03c2',
    'title-3xl-accent': '\u03a4\u03af\u03c4\u03bb\u03bf\u03c2 \u03c0\u03bf\u03bb\u03cd \u03bc\u03b5\u03b3\u03ac\u03bb\u03bf\u03c2 \u03c4\u03cc\u03bd\u03bf\u03c2',
    'title-2xl': '\u03a4\u03af\u03c4\u03bb\u03bf\u03c2 \u03b4\u03b9\u03c0\u03bb\u03ac \u03bc\u03b5\u03b3\u03ac\u03bb\u03bf\u03c2',
    'title-2xl-accent': '\u03a4\u03af\u03c4\u03bb\u03bf\u03c2 \u03b4\u03b9\u03c0\u03bb\u03ac \u03bc\u03b5\u03b3\u03ac\u03bb\u03bf\u03c2 \u03c4\u03cc\u03bd\u03bf\u03c2',
    'title-xl': '\u03a4\u03af\u03c4\u03bb\u03bf\u03c2 \u03bc\u03b5\u03b3\u03b1\u03bb\u03cd\u03c4\u03b5\u03c1\u03bf\u03c2',
    'title-xl-accent': '\u03a4\u03af\u03c4\u03bb\u03bf\u03c2 \u03bc\u03b5\u03b3\u03b1\u03bb\u03cd\u03c4\u03b5\u03c1\u03bf\u03c2 \u03c4\u03cc\u03bd\u03bf\u03c2',
    'title-lg-accent': '\u03a4\u03af\u03c4\u03bb\u03bf\u03c2 \u03bc\u03b5\u03b3\u03ac\u03bb\u03bf\u03c2 \u03c4\u03cc\u03bd\u03bf\u03c2',
    'title-lg': '\u03a4\u03af\u03c4\u03bb\u03bf\u03c2 \u03bc\u03b5\u03b3\u03ac\u03bb\u03bf\u03c2',
    'title-base': '\u03a4\u03af\u03c4\u03bb\u03bf\u03c2 \u03b2\u03b1\u03c3\u03b9\u03ba\u03cc\u03c2',
    'title-sm': '\u03a4\u03af\u03c4\u03bb\u03bf\u03c2 \u03bc\u03b9\u03ba\u03c1\u03cc\u03c2',
    'body-short-lg': '\u039a\u03b5\u03af\u03bc\u03b5\u03bd\u03bf \u03bc\u03b5\u03b3\u03ac\u03bb\u03bf',
    'body-short-base': '\u039a\u03b5\u03af\u03bc\u03b5\u03bd\u03bf \u03b2\u03b1\u03c3\u03b9\u03ba\u03cc',
    'body-short-sm': '\u039a\u03b5\u03af\u03bc\u03b5\u03bd\u03bf \u03bc\u03b9\u03ba\u03c1\u03cc',
    'body-short-sm-strong': '\u039a\u03b5\u03af\u03bc\u03b5\u03bd\u03bf \u03bc\u03b9\u03ba\u03c1\u03cc \u03ad\u03bd\u03c4\u03bf\u03bd\u03bf',
    'body-short-caption': '\u039a\u03b5\u03af\u03bc\u03b5\u03bd\u03bf \u03bb\u03b5\u03b6\u03ac\u03bd\u03c4\u03b1',
    'body-short-caption-strong': '\u039a\u03b5\u03af\u03bc\u03b5\u03bd\u03bf \u03bb\u03b5\u03b6\u03ac\u03bd\u03c4\u03b1 \u03ad\u03bd\u03c4\u03bf\u03bd\u03bf',
    'body-long-lg': '\u039a\u03b5\u03af\u03bc\u03b5\u03bd\u03bf \u03bc\u03b5\u03b3\u03ac\u03bb\u03bf',
    'body-long-base': '\u039a\u03b5\u03af\u03bc\u03b5\u03bd\u03bf \u03b2\u03b1\u03c3\u03b9\u03ba\u03cc',
    'body-long-sm': '\u039a\u03b5\u03af\u03bc\u03b5\u03bd\u03bf \u03bc\u03b9\u03ba\u03c1\u03cc',
    'body-long-caption': '\u039a\u03b5\u03af\u03bc\u03b5\u03bd\u03bf \u03bb\u03b5\u03b6\u03ac\u03bd\u03c4\u03b1',
  },
};

/* ==========================================================================
   Spec table for typography styles
   ========================================================================== */

interface StyleSpec {
  variant: TypographyVariant;
  accent?: boolean;
  label: string;
  weight: string;
  size: string;
  lineHeight: string;
}

const titleSpecs: StyleSpec[] = [
  { variant: 'title-4xl', label: 'Title 4xlarge', weight: 'Bold', size: '56', lineHeight: '60' },
  { variant: 'title-4xl', accent: true, label: 'Title 4xlarge Accent', weight: 'Bold', size: '56', lineHeight: '60' },
  { variant: 'title-3xl', label: 'Title 3xlarge', weight: 'Bold', size: '48', lineHeight: '52' },
  { variant: 'title-3xl', accent: true, label: 'Title 3xlarge Accent', weight: 'Bold', size: '48', lineHeight: '52' },
  { variant: 'title-2xl', label: 'Title 2xlarge', weight: 'Bold', size: '40', lineHeight: '44' },
  { variant: 'title-2xl', accent: true, label: 'Title 2xlarge Accent', weight: 'Bold', size: '40', lineHeight: '44' },
  { variant: 'title-xl', label: 'Title xlarge', weight: 'Bold', size: '32', lineHeight: '40' },
  { variant: 'title-xl', accent: true, label: 'Title xlarge Accent', weight: 'Bold', size: '32', lineHeight: '40' },
  { variant: 'title-lg', accent: true, label: 'Title large Accent', weight: 'Bold', size: '24', lineHeight: '32' },
  { variant: 'title-lg', label: 'Title large', weight: 'Semibold', size: '24', lineHeight: '32' },
  { variant: 'title-base', label: 'Title base', weight: 'Semibold', size: '20', lineHeight: '24' },
  { variant: 'title-sm', label: 'Title small', weight: 'Semibold', size: '16', lineHeight: '20' },
];

const bodyShortSpecs: StyleSpec[] = [
  { variant: 'body-short-lg', label: 'Body large', weight: 'Regular', size: '20', lineHeight: '24' },
  { variant: 'body-short-base', label: 'Body base', weight: 'Regular', size: '16', lineHeight: '20' },
  { variant: 'body-short-sm', label: 'Body small', weight: 'Regular', size: '14', lineHeight: '18' },
  { variant: 'body-short-sm-strong', label: 'Body small strong', weight: 'Semibold', size: '14', lineHeight: '18' },
  { variant: 'body-short-caption', label: 'Body caption', weight: 'Regular', size: '12', lineHeight: '14' },
  { variant: 'body-short-caption-strong', label: 'Body caption strong', weight: 'Semibold', size: '12', lineHeight: '14' },
];

const bodyLongSpecs: StyleSpec[] = [
  { variant: 'body-long-lg', label: 'Body large', weight: 'Regular', size: '20', lineHeight: '28' },
  { variant: 'body-long-base', label: 'Body base', weight: 'Regular', size: '16', lineHeight: '24' },
  { variant: 'body-long-sm', label: 'Body small', weight: 'Regular', size: '14', lineHeight: '20' },
  { variant: 'body-long-caption', label: 'Body caption', weight: 'Regular', size: '12', lineHeight: '18' },
];

const specTableStyle: React.CSSProperties = { fontFamily: 'var(--font-family-default)', fontSize: 16, color: '#232630', fontWeight: 600 };
const specCellStyle: React.CSSProperties = { ...specTableStyle, width: 99 };
const headerCellStyle: React.CSSProperties = { ...specTableStyle, color: '#6f7478' };

const SpecSection: React.FC<{
  title: string;
  specs: StyleSpec[];
  lang: TypographyLang;
}> = ({ title, specs, lang }) => {
  const getText = (spec: StyleSpec) => {
    const key = spec.accent ? `${spec.variant}-accent` : spec.variant;
    return sampleText[lang][key] || sampleText[lang][spec.variant] || spec.label;
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
      {/* Header */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ display: 'flex', gap: 56, alignItems: 'center' }}>
          <span style={{ ...headerCellStyle, flex: '1 0 0', minWidth: 300 }}>{title}</span>
          <span style={{ ...headerCellStyle, width: 99 }}>Weight</span>
          <span style={{ ...headerCellStyle, width: 62 }}>Size</span>
          <span style={{ ...headerCellStyle, width: 105 }}>Line height</span>
        </div>
        <div style={{ height: 0.5, background: '#ecedf2' }} />
      </div>
      {/* Rows */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
        {specs.map((spec, i) => (
          <div key={i} style={{ display: 'flex', gap: 56, alignItems: 'center' }}>
            <div style={{ flex: '1 0 0', minWidth: 300 }}>
              <Typography variant={spec.variant} lang={lang} accent={spec.accent} as="span">
                {getText(spec)}
              </Typography>
            </div>
            <span style={specCellStyle}>{spec.weight}</span>
            <span style={{ ...specCellStyle, width: 62 }}>{spec.size}</span>
            <span style={{ ...specCellStyle, width: 89 }}>{spec.lineHeight}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ==========================================================================
   Full Typography page per language
   ========================================================================== */

const TypographyPage: React.FC<{ lang: TypographyLang; label: string }> = ({ lang, label }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 120, padding: '40px 0', maxWidth: 964 }}>
    <h2 style={{ fontFamily: 'var(--font-family-default)', fontSize: 24, fontWeight: 600, color: '#0f0f15', margin: 0 }}>
      Typography styles for WEB ({label})
    </h2>
    <SpecSection title={`Title ${label}`} specs={titleSpecs} lang={lang} />
    <SpecSection title="Body Short" specs={bodyShortSpecs} lang={lang} />
    <SpecSection title="Body Long" specs={bodyLongSpecs} lang={lang} />
  </div>
);

/* ==========================================================================
   Stories
   ========================================================================== */

export const Default: Story = {
  args: { variant: 'title-lg', children: 'Typography', lang: 'en' },
};

export const English: Story = {
  name: 'English (EN)',
  render: () => <TypographyPage lang="en" label="EN" />,
};

export const Russian: Story = {
  name: 'Russian (RU)',
  render: () => <TypographyPage lang="ru" label="RU" />,
};

export const Arabic: Story = {
  name: 'Arabic (AR)',
  render: () => <TypographyPage lang="ar" label="AR" />,
};

export const Greek: Story = {
  name: 'Greek (EL)',
  render: () => <TypographyPage lang="el" label="EL" />,
};

export const AllLanguages: Story = {
  name: 'All Languages',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 80 }}>
      {(['en', 'ru', 'ar', 'el'] as TypographyLang[]).map(lang => (
        <div key={lang}>
          <h2 style={{ fontFamily: 'var(--font-family-default)', fontSize: 20, fontWeight: 600, color: '#6e6e81', marginBottom: 24, borderBottom: '1px solid #ecedf2', paddingBottom: 12 }}>
            {lang.toUpperCase()}
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <Typography variant="title-2xl" lang={lang}>
              {sampleText[lang]['title-2xl']}
            </Typography>
            <Typography variant="title-2xl" lang={lang} accent>
              {sampleText[lang]['title-2xl-accent']}
            </Typography>
            <Typography variant="title-lg" lang={lang}>
              {sampleText[lang]['title-lg']}
            </Typography>
            <Typography variant="body-short-base" lang={lang}>
              {sampleText[lang]['body-short-base']}
            </Typography>
            <Typography variant="body-short-sm" lang={lang}>
              {sampleText[lang]['body-short-sm']}
            </Typography>
            <Typography variant="body-short-caption" lang={lang}>
              {sampleText[lang]['body-short-caption']}
            </Typography>
          </div>
        </div>
      ))}
    </div>
  ),
};
