import type { Meta, StoryObj } from '@storybook/react';
import { Tumbler } from './Tumbler';

const meta = {
  title: 'Design System/Tumbler',
  component: Tumbler,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'radio' }, options: ['M', 'S'] },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
  },
} satisfies Meta<typeof Tumbler>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { label: 'Tumbler', size: 'M' } };
export const Checked: Story = { args: { label: 'Tumbler', checked: true, size: 'M' } };
export const Disabled: Story = { args: { label: 'Tumbler', disabled: true, size: 'M' } };
export const DisabledChecked: Story = { name: 'Disabled / Checked', args: { label: 'Tumbler', disabled: true, checked: true, size: 'M' } };
export const SizeS: Story = { name: 'Size S', args: { label: 'Tumbler', size: 'S' } };
export const SizeSChecked: Story = { name: 'Size S / Checked', args: { label: 'Tumbler', size: 'S', checked: true } };

export const StandaloneOnly: Story = {
  name: 'Standalone (no label)',
  args: { size: 'M' },
};

export const AllStates: Story = {
  name: 'All States',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Tumbler label="Default off" size="M" />
      <Tumbler label="Default on" size="M" checked />
      <Tumbler label="Disabled off" size="M" disabled />
      <Tumbler label="Disabled on" size="M" disabled checked />
      <div style={{ borderTop: '1px solid #eee', paddingTop: 16 }}>
        <p style={{ fontSize: 12, color: '#6e6e81', marginBottom: 12 }}>Size S</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Tumbler label="Default off" size="S" />
          <Tumbler label="Default on" size="S" checked />
          <Tumbler label="Disabled off" size="S" disabled />
          <Tumbler label="Disabled on" size="S" disabled checked />
        </div>
      </div>
    </div>
  ),
};
