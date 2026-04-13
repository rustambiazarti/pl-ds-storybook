import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from './Radio';

const meta = {
  title: 'Design System/Radio',
  component: Radio,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'radio' }, options: ['L', 'M'] },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
    label: { control: 'text' },
  },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { label: 'Radio option', size: 'L' } };
export const Checked: Story = { args: { label: 'Selected', checked: true, size: 'L' } };
export const ErrorState: Story = { name: 'Error', args: { label: 'Error state', error: true, size: 'L' } };
export const ErrorChecked: Story = { name: 'Error / Checked', args: { label: 'Error selected', error: true, checked: true, size: 'L' } };
export const Disabled: Story = { args: { label: 'Disabled', disabled: true, size: 'L' } };
export const DisabledChecked: Story = { name: 'Disabled / Checked', args: { label: 'Disabled selected', disabled: true, checked: true, size: 'L' } };
export const SizeM: Story = { name: 'Size M', args: { label: 'Size M', size: 'M' } };

export const RadioGroup: Story = {
  name: 'Radio Group',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Radio label="Option 1" size="L" checked />
      <Radio label="Option 2" size="L" />
      <Radio label="Option 3" size="L" />
      <Radio label="Disabled option" size="L" disabled />
    </div>
  ),
};
