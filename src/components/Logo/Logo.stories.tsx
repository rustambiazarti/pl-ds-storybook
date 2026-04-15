import type { Meta, StoryObj } from '@storybook/react';
import { Logo } from './Logo';

const meta = {
  title: 'Foundations/Logo',
  component: Logo,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    color: { control: { type: 'radio' }, options: ['default', 'black', 'white'] },
    variant: { control: { type: 'radio' }, options: ['sign', 'full'] },
    arabic: { control: 'boolean' },
    subbrand: { control: { type: 'radio' }, options: ['none', 'for-organisers', 'sale-console'] },
    height: { control: { type: 'range', min: 16, max: 64, step: 4 } },
  },
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { variant: 'full', color: 'default' } };
export const SignOnly: Story = { name: 'Sign Only', args: { variant: 'sign', color: 'default' } };
export const Black: Story = { args: { variant: 'full', color: 'black' } };
export const Arabic: Story = { args: { variant: 'full', color: 'default', arabic: true } };
export const ArabicBlack: Story = { name: 'Arabic / Black', args: { variant: 'full', color: 'black', arabic: true } };
export const ForOrganisers: Story = { name: 'For Organisers', args: { variant: 'full', color: 'default', subbrand: 'for-organisers' } };
export const SaleConsole: Story = { name: 'Sale Console', args: { variant: 'full', color: 'default', subbrand: 'sale-console' } };

export const WhiteOnDark: Story = {
  name: 'White (on dark bg)',
  args: { variant: 'full', color: 'white' },
  parameters: { backgrounds: { default: 'dark' } },
};

export const AllB2CVariants: Story = {
  name: 'All B2C Variants',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
        <Logo variant="sign" color="default" />
        <Logo variant="full" color="default" />
        <Logo variant="full" color="default" arabic />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
        <Logo variant="sign" color="black" />
        <Logo variant="full" color="black" />
        <Logo variant="full" color="black" arabic />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 32, background: '#1a1a2e', padding: 16, borderRadius: 12 }}>
        <Logo variant="sign" color="white" />
        <Logo variant="full" color="white" />
        <Logo variant="full" color="white" arabic />
      </div>
    </div>
  ),
};

export const AllB2BVariants: Story = {
  name: 'All B2B Variants',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
        <Logo variant="full" color="default" subbrand="for-organisers" />
        <Logo variant="full" color="default" subbrand="for-organisers" arabic />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
        <Logo variant="full" color="black" subbrand="for-organisers" />
        <Logo variant="full" color="black" subbrand="for-organisers" arabic />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
        <Logo variant="full" color="default" subbrand="sale-console" />
        <Logo variant="full" color="default" subbrand="sale-console" arabic />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
        <Logo variant="full" color="black" subbrand="sale-console" />
        <Logo variant="full" color="black" subbrand="sale-console" arabic />
      </div>
    </div>
  ),
};
