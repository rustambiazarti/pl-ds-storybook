import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';

const meta = {
  title: 'Design System/Checkbox',
  component: Checkbox,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'radio' }, options: ['M', 'S'] },
    checked: { control: 'boolean' },
    indeterminate: { control: 'boolean' },
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
    label: { control: 'text' },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { label: 'Checkbox label', size: 'M' } };
export const Checked: Story = { args: { label: 'Checked', checked: true, size: 'M' } };
export const Indeterminate: Story = { args: { label: 'Indeterminate', indeterminate: true, size: 'M' } };
export const Error: Story = { args: { label: 'Error state', error: true, size: 'M' } };
export const ErrorChecked: Story = { name: 'Error / Checked', args: { label: 'Error checked', error: true, checked: true, size: 'M' } };
export const Disabled: Story = { args: { label: 'Disabled', disabled: true, size: 'M' } };
export const DisabledChecked: Story = { name: 'Disabled / Checked', args: { label: 'Disabled checked', disabled: true, checked: true, size: 'M' } };
export const SizeS: Story = { name: 'Size S', args: { label: 'Size S', size: 'S' } };
export const SizeSChecked: Story = { name: 'Size S / Checked', args: { label: 'Size S', size: 'S', checked: true } };

export const AllStates: Story = {
  name: 'All States',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Checkbox label="Default" size="M" />
      <Checkbox label="Checked" size="M" checked />
      <Checkbox label="Indeterminate" size="M" indeterminate />
      <Checkbox label="Error" size="M" error />
      <Checkbox label="Error checked" size="M" error checked />
      <Checkbox label="Disabled" size="M" disabled />
      <Checkbox label="Disabled checked" size="M" disabled checked />
      <Checkbox label="Disabled indeterminate" size="M" disabled indeterminate />
      <div style={{ borderTop: '1px solid #eee', paddingTop: 16 }}>
        <p style={{ fontSize: 12, color: '#6e6e81', marginBottom: 12 }}>Size S</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Checkbox label="Default" size="S" />
          <Checkbox label="Checked" size="S" checked />
          <Checkbox label="Indeterminate" size="S" indeterminate />
          <Checkbox label="Disabled" size="S" disabled />
          <Checkbox label="Disabled checked" size="S" disabled checked />
        </div>
      </div>
    </div>
  ),
};
