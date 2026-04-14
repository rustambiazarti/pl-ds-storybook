import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Icon } from './Icon';
import { iconNames, iconCategories, iconData } from './iconData';
import type { IconName } from './iconData';
import styles from './Icon.module.css';

const meta = {
  title: 'Design System/Icons',
  component: Icon,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'select',
      options: iconNames,
    },
    size: {
      control: { type: 'radio' },
      options: [24, 20, 16, 12],
    },
    variant: {
      control: { type: 'radio' },
      options: ['outline', 'filled'],
    },
    color: { control: 'color' },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { name: 'Action/Search' as IconName, size: 24, variant: 'outline' },
};

/* ==========================================================================
   Gallery — all icons by category
   ========================================================================== */

const IconCard: React.FC<{
  name: string;
  size?: 24 | 20 | 16 | 12;
  variant?: 'outline' | 'filled';
}> = ({ name, size = 24, variant = 'outline' }) => (
  <div className={styles.iconCard} title={`${name} (${variant})`}>
    <Icon name={name as IconName} size={size} variant={variant} />
    <span className={styles.iconName}>{name.split('/').pop()}</span>
  </div>
);

export const Gallery: Story = {
  args: { name: 'Action/Search' as IconName },
  name: 'All Icons — Outline',
  render: () => (
    <div className={styles.gallery}>
      {Object.entries(iconCategories).map(([category, names]) => (
        <div key={category} className={styles.category}>
          <h3 className={styles.categoryTitle}>
            {category} <span style={{ fontWeight: 400, color: '#9999ac' }}>({names.length})</span>
          </h3>
          <div className={styles.grid}>
            {names.map(name => (
              <IconCard key={name} name={name} />
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};

export const GalleryFilled: Story = {
  args: { name: 'Action/Search' as IconName },
  name: 'All Icons — Filled',
  render: () => {
    // Filter to only icons that have filled variants
    const filledCategories: Record<string, string[]> = {};
    for (const [category, names] of Object.entries(iconCategories)) {
      const filledNames = names.filter(name => {
        const d = iconData[name];
        return d && (d['24-filled'] || d['16-filled']);
      });
      if (filledNames.length > 0) {
        filledCategories[category] = filledNames;
      }
    }
    return (
      <div className={styles.gallery}>
        {Object.entries(filledCategories).map(([category, names]) => (
          <div key={category} className={styles.category}>
            <h3 className={styles.categoryTitle}>
              {category} <span style={{ fontWeight: 400, color: '#9999ac' }}>({names.length})</span>
            </h3>
            <div className={styles.grid}>
              {names.map(name => (
                <IconCard key={name} name={name} variant="filled" />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  },
};

export const OutlineVsFilled: Story = {
  args: { name: 'Action/Search' as IconName },
  name: 'Outline vs Filled',
  render: () => {
    const iconsWithFilled = iconNames.filter(name => {
      const d = iconData[name];
      return d && d['24-filled'];
    }).slice(0, 20);

    return (
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 16 }}>
        {iconsWithFilled.map(name => (
          <div
            key={name}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              padding: 12,
              borderRadius: 8,
              border: '1px solid var(--bg-border)',
              background: 'var(--bg-default)',
            }}
          >
            <Icon name={name} size={24} variant="outline" />
            <Icon name={name} size={24} variant="filled" />
            <span style={{ fontSize: 12, color: 'var(--content-secondary)', flex: 1 }}>
              {name.split('/').pop()}
            </span>
          </div>
        ))}
      </div>
    );
  },
};

export const Sizes: Story = {
  args: { name: 'Action/Search' as IconName },
  name: 'Sizes',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      {([24, 16] as const).map(size => (
        <div key={size}>
          <h3 style={{ fontFamily: 'var(--font-family-default)', fontSize: 14, color: '#6e6e81', marginBottom: 12 }}>
            Size {size}px
          </h3>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
            <Icon name={'Action/Search' as IconName} size={size} />
            <Icon name={'Action/Settings' as IconName} size={size} />
            <Icon name={'Navigation/Close' as IconName} size={size} />
            <Icon name={'Navigation/ArrowLeft' as IconName} size={size} />
            <Icon name={'Social/Heart' as IconName} size={size} />
            <Icon name={'Social/Star' as IconName} size={size} />
            <Icon name={'Action/Eye' as IconName} size={size} />
            <Icon name={'File/Trash' as IconName} size={size} />
            <Icon name={'Action/Plus' as IconName} size={size} />
            <Icon name={'Social/Mail' as IconName} size={size} />
          </div>
          <h3 style={{ fontFamily: 'var(--font-family-default)', fontSize: 14, color: '#6e6e81', marginBottom: 12, marginTop: 16 }}>
            Size {size}px — Filled
          </h3>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
            <Icon name={'Action/Search' as IconName} size={size} variant="filled" />
            <Icon name={'Action/Settings' as IconName} size={size} variant="filled" />
            <Icon name={'Social/Heart' as IconName} size={size} variant="filled" />
            <Icon name={'Social/Star' as IconName} size={size} variant="filled" />
            <Icon name={'Action/Eye' as IconName} size={size} variant="filled" />
            <Icon name={'File/Trash' as IconName} size={size} variant="filled" />
            <Icon name={'Social/Mail' as IconName} size={size} variant="filled" />
            <Icon name={'Geo/Pin' as IconName} size={size} variant="filled" />
            <Icon name={'Player/Play' as IconName} size={size} variant="filled" />
            <Icon name={'Finance/Wallet' as IconName} size={size} variant="filled" />
          </div>
        </div>
      ))}
    </div>
  ),
};

export const Colors: Story = {
  args: { name: 'Action/Search' as IconName },
  name: 'Colors',
  render: () => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center', flexWrap: 'wrap' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <Icon name={'Action/Search' as IconName} size={24} color="var(--content-primary)" />
        <span style={{ fontSize: 12, color: '#6e6e81' }}>Primary</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <Icon name={'Action/Search' as IconName} size={24} color="var(--content-secondary)" />
        <span style={{ fontSize: 12, color: '#6e6e81' }}>Secondary</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <Icon name={'Action/Search' as IconName} size={24} color="var(--content-highlight)" />
        <span style={{ fontSize: 12, color: '#6e6e81' }}>Highlight</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <Icon name={'Action/Search' as IconName} size={24} color="var(--accent-alert)" />
        <span style={{ fontSize: 12, color: '#6e6e81' }}>Alert</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <Icon name={'Action/Search' as IconName} size={24} color="var(--accent-link)" />
        <span style={{ fontSize: 12, color: '#6e6e81' }}>Link</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, background: '#0f0f15', padding: '12px', borderRadius: 8 }}>
        <Icon name={'Action/Search' as IconName} size={24} color="#ffffff" />
        <span style={{ fontSize: 12, color: '#9999ac' }}>Inverse</span>
      </div>
    </div>
  ),
};

export const Navigation: Story = {
  args: { name: 'Navigation/Close' as IconName },
  name: 'Navigation',
  render: () => (
    <div className={styles.grid} style={{ maxWidth: 600 }}>
      {(iconCategories['Navigation'] || []).map(name => (
        <IconCard key={name} name={name} />
      ))}
    </div>
  ),
};

export const Action: Story = {
  args: { name: 'Action/Search' as IconName },
  name: 'Action',
  render: () => (
    <div className={styles.grid} style={{ maxWidth: 900 }}>
      {(iconCategories['Action'] || []).map(name => (
        <IconCard key={name} name={name} />
      ))}
    </div>
  ),
};

export const Social: Story = {
  args: { name: 'Social/Heart' as IconName },
  name: 'Social',
  render: () => (
    <div className={styles.grid} style={{ maxWidth: 600 }}>
      {(iconCategories['Social'] || []).map(name => (
        <IconCard key={name} name={name} />
      ))}
    </div>
  ),
};
