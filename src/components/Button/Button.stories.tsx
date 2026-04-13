import type { Meta, StoryObj } from '@storybook/react';
import { Button, HeartIcon } from './Button';

const meta = {
  title: 'Design System/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'ghost'],
    },
    size: {
      control: { type: 'radio' },
      options: ['L', 'M', 'S', 'XS'],
    },
    type: {
      control: { type: 'radio' },
      options: ['flexible', 'fixed', 'icon-only'],
    },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    children: { control: 'text' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/* ============================
   Primary
   ============================ */

export const PrimaryL: Story = {
  name: 'Primary / L',
  args: {
    variant: 'primary',
    size: 'L',
    children: 'Button Text',
    leftIcon: <HeartIcon size={16} />,
    rightIcon: <HeartIcon size={16} />,
  },
};

export const PrimaryM: Story = {
  name: 'Primary / M',
  args: {
    variant: 'primary',
    size: 'M',
    children: 'Button Text',
    leftIcon: <HeartIcon size={16} />,
    rightIcon: <HeartIcon size={16} />,
  },
};

export const PrimaryS: Story = {
  name: 'Primary / S',
  args: {
    variant: 'primary',
    size: 'S',
    children: 'Button Text',
    leftIcon: <HeartIcon size={16} />,
    rightIcon: <HeartIcon size={16} />,
  },
};

export const PrimaryXS: Story = {
  name: 'Primary / XS',
  args: {
    variant: 'primary',
    size: 'XS',
    children: 'Button Text',
    leftIcon: <HeartIcon size={12} />,
    rightIcon: <HeartIcon size={12} />,
  },
};

/* ============================
   Secondary
   ============================ */

export const SecondaryL: Story = {
  name: 'Secondary / L',
  args: {
    variant: 'secondary',
    size: 'L',
    children: 'Button Text',
    leftIcon: <HeartIcon size={16} />,
    rightIcon: <HeartIcon size={16} />,
  },
};

export const SecondaryM: Story = {
  name: 'Secondary / M',
  args: {
    variant: 'secondary',
    size: 'M',
    children: 'Button Text',
    leftIcon: <HeartIcon size={16} />,
    rightIcon: <HeartIcon size={16} />,
  },
};

/* ============================
   Ghost
   ============================ */

export const GhostL: Story = {
  name: 'Ghost / L',
  args: {
    variant: 'ghost',
    size: 'L',
    children: 'Button Text',
    leftIcon: <HeartIcon size={16} />,
    rightIcon: <HeartIcon size={16} />,
  },
};

export const GhostM: Story = {
  name: 'Ghost / M',
  args: {
    variant: 'ghost',
    size: 'M',
    children: 'Button Text',
    leftIcon: <HeartIcon size={16} />,
    rightIcon: <HeartIcon size={16} />,
  },
};

/* ============================
   Fixed width
   ============================ */

export const FixedPrimary: Story = {
  name: 'Fixed / Primary L',
  args: {
    variant: 'primary',
    size: 'L',
    type: 'fixed',
    children: 'Button Text',
    leftIcon: <HeartIcon size={16} />,
    rightIcon: <HeartIcon size={16} />,
  },
};

export const FixedSecondary: Story = {
  name: 'Fixed / Secondary L',
  args: {
    variant: 'secondary',
    size: 'L',
    type: 'fixed',
    children: 'Button Text',
    leftIcon: <HeartIcon size={16} />,
    rightIcon: <HeartIcon size={16} />,
  },
};

/* ============================
   Icon Only
   ============================ */

export const IconOnlyPrimaryL: Story = {
  name: 'Icon Only / Primary L',
  args: {
    variant: 'primary',
    size: 'L',
    type: 'icon-only',
    icon: <HeartIcon size={16} />,
  },
};

export const IconOnlySecondaryM: Story = {
  name: 'Icon Only / Secondary M',
  args: {
    variant: 'secondary',
    size: 'M',
    type: 'icon-only',
    icon: <HeartIcon size={16} />,
  },
};

export const IconOnlyGhostS: Story = {
  name: 'Icon Only / Ghost S',
  args: {
    variant: 'ghost',
    size: 'S',
    type: 'icon-only',
    icon: <HeartIcon size={16} />,
  },
};

/* ============================
   States
   ============================ */

export const Disabled: Story = {
  name: 'Disabled',
  args: {
    variant: 'primary',
    size: 'L',
    disabled: true,
    children: 'Button Text',
    leftIcon: <HeartIcon size={16} />,
    rightIcon: <HeartIcon size={16} />,
  },
};

export const Loading: Story = {
  name: 'Loading',
  args: {
    variant: 'primary',
    size: 'L',
    loading: true,
    children: 'Button Text',
  },
};

export const LoadingSecondary: Story = {
  name: 'Loading / Secondary',
  args: {
    variant: 'secondary',
    size: 'M',
    loading: true,
    children: 'Button Text',
  },
};

/* ============================
   Overview grid
   ============================ */

export const AllVariants: Story = {
  name: 'All Variants Overview',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      {/* Sizes header */}
      <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr 1fr 1fr', gap: 16, alignItems: 'center' }}>
        <span />
        <span style={{ fontSize: 12, color: '#6e6e81', fontWeight: 600 }}>Primary</span>
        <span style={{ fontSize: 12, color: '#6e6e81', fontWeight: 600 }}>Secondary</span>
        <span style={{ fontSize: 12, color: '#6e6e81', fontWeight: 600 }}>Ghost</span>
      </div>

      {(['L', 'M', 'S', 'XS'] as const).map((size) => (
        <div key={size} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr 1fr 1fr', gap: 16, alignItems: 'center' }}>
            <span style={{ fontSize: 12, color: '#6e6e81' }}>Size {size}</span>
            <Button variant="primary" size={size} leftIcon={<HeartIcon size={size === 'XS' ? 12 : 16} />} rightIcon={<HeartIcon size={size === 'XS' ? 12 : 16} />}>Button Text</Button>
            <Button variant="secondary" size={size} leftIcon={<HeartIcon size={size === 'XS' ? 12 : 16} />} rightIcon={<HeartIcon size={size === 'XS' ? 12 : 16} />}>Button Text</Button>
            <Button variant="ghost" size={size} leftIcon={<HeartIcon size={size === 'XS' ? 12 : 16} />} rightIcon={<HeartIcon size={size === 'XS' ? 12 : 16} />}>Button Text</Button>
          </div>
        </div>
      ))}

      {/* Disabled row */}
      <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr 1fr 1fr', gap: 16, alignItems: 'center' }}>
        <span style={{ fontSize: 12, color: '#6e6e81' }}>Disabled</span>
        <Button variant="primary" size="L" disabled leftIcon={<HeartIcon size={16} />} rightIcon={<HeartIcon size={16} />}>Button Text</Button>
        <Button variant="secondary" size="L" disabled leftIcon={<HeartIcon size={16} />} rightIcon={<HeartIcon size={16} />}>Button Text</Button>
        <Button variant="ghost" size="L" disabled leftIcon={<HeartIcon size={16} />} rightIcon={<HeartIcon size={16} />}>Button Text</Button>
      </div>

      {/* Loading row */}
      <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr 1fr 1fr', gap: 16, alignItems: 'center' }}>
        <span style={{ fontSize: 12, color: '#6e6e81' }}>Loading</span>
        <Button variant="primary" size="L" loading>Button Text</Button>
        <Button variant="secondary" size="L" loading>Button Text</Button>
        <Button variant="ghost" size="L" loading>Button Text</Button>
      </div>

      {/* Icon Only row */}
      <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr 1fr 1fr', gap: 16, alignItems: 'center' }}>
        <span style={{ fontSize: 12, color: '#6e6e81' }}>Icon Only</span>
        <div style={{ display: 'flex', gap: 8 }}>
          <Button variant="primary" size="L" type="icon-only" icon={<HeartIcon size={16} />} />
          <Button variant="primary" size="M" type="icon-only" icon={<HeartIcon size={16} />} />
          <Button variant="primary" size="S" type="icon-only" icon={<HeartIcon size={16} />} />
          <Button variant="primary" size="XS" type="icon-only" icon={<HeartIcon size={12} />} />
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <Button variant="secondary" size="L" type="icon-only" icon={<HeartIcon size={16} />} />
          <Button variant="secondary" size="M" type="icon-only" icon={<HeartIcon size={16} />} />
          <Button variant="secondary" size="S" type="icon-only" icon={<HeartIcon size={16} />} />
          <Button variant="secondary" size="XS" type="icon-only" icon={<HeartIcon size={12} />} />
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <Button variant="ghost" size="L" type="icon-only" icon={<HeartIcon size={16} />} />
          <Button variant="ghost" size="M" type="icon-only" icon={<HeartIcon size={16} />} />
          <Button variant="ghost" size="S" type="icon-only" icon={<HeartIcon size={16} />} />
          <Button variant="ghost" size="XS" type="icon-only" icon={<HeartIcon size={12} />} />
        </div>
      </div>
    </div>
  ),
};
