import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from './Radio';

const meta = {
  title: 'Inputs/Radio',
  component: Radio,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'radio' }, options: ['M', 'S'] },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
    label: { control: 'text' },
  },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { label: 'Radio option', size: 'M' } };
export const Checked: Story = { args: { label: 'Selected', checked: true, size: 'M' } };
export const ErrorState: Story = { name: 'Error', args: { label: 'Error state', error: true, size: 'M' } };
export const ErrorChecked: Story = { name: 'Error / Checked', args: { label: 'Error selected', error: true, checked: true, size: 'M' } };
export const Disabled: Story = { args: { label: 'Disabled', disabled: true, size: 'M' } };
export const DisabledChecked: Story = { name: 'Disabled / Checked', args: { label: 'Disabled selected', disabled: true, checked: true, size: 'M' } };
export const SizeS: Story = { name: 'Size S', args: { label: 'Size S', size: 'S' } };

export const RadioGroup: Story = {
  name: 'Radio Group',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Radio label="Option 1" size="M" checked />
      <Radio label="Option 2" size="M" />
      <Radio label="Option 3" size="M" />
      <Radio label="Disabled option" size="M" disabled />
    </div>
  ),
};
