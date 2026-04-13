import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';

const meta = {
  title: 'Design System/Checkbox',
  component: Checkbox,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'radio' }, options: ['L', 'M'] },
    checked: { control: 'boolean' },
    indeterminate: { control: 'boolean' },
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
    label: { control: 'text' },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { label: 'Checkbox label', size: 'L' } };
export const Checked: Story = { args: { label: 'Checked', checked: true, size: 'L' } };
export const Indeterminate: Story = { args: { label: 'Indeterminate', indeterminate: true, size: 'L' } };
export const Error: Story = { args: { label: 'Error state', error: true, size: 'L' } };
export const ErrorChecked: Story = { name: 'Error / Checked', args: { label: 'Error checked', error: true, checked: true, size: 'L' } };
export const Disabled: Story = { args: { label: 'Disabled', disabled: true, size: 'L' } };
export const DisabledChecked: Story = { name: 'Disabled / Checked', args: { label: 'Disabled checked', disabled: true, checked: true, size: 'L' } };
export const SizeM: Story = { name: 'Size M', args: { label: 'Size M', size: 'M' } };
export const SizeMChecked: Story = { name: 'Size M / Checked', args: { label: 'Size M', size: 'M', checked: true } };

export const AllStates: Story = {
  name: 'All States',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Checkbox label="Default" size="L" />
      <Checkbox label="Checked" size="L" checked />
      <Checkbox label="Indeterminate" size="L" indeterminate />
      <Checkbox label="Error" size="L" error />
      <Checkbox label="Error checked" size="L" error checked />
      <Checkbox label="Disabled" size="L" disabled />
      <Checkbox label="Disabled checked" size="L" disabled checked />
      <div style={{ borderTop: '1px solid #eee', paddingTop: 16 }}>
        <p style={{ fontSize: 12, color: '#6e6e81', marginBottom: 12 }}>Size M</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Checkbox label="Default" size="M" />
          <Checkbox label="Checked" size="M" checked />
          <Checkbox label="Disabled" size="M" disabled />
        </div>
      </div>
    </div>
  ),
};
