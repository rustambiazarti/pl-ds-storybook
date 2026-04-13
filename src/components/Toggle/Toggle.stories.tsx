import type { Meta, StoryObj } from '@storybook/react';
import { Toggle } from './Toggle';

const meta = {
  title: 'Design System/Toggle',
  component: Toggle,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'radio' }, options: ['L', 'M'] },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
  },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Off: Story = { args: { label: 'Toggle off', size: 'L' } };
export const On: Story = { args: { label: 'Toggle on', checked: true, size: 'L' } };
export const DisabledOff: Story = { name: 'Disabled / Off', args: { label: 'Disabled off', disabled: true, size: 'L' } };
export const DisabledOn: Story = { name: 'Disabled / On', args: { label: 'Disabled on', disabled: true, checked: true, size: 'L' } };
export const SizeM: Story = { name: 'Size M / Off', args: { label: 'Size M', size: 'M' } };
export const SizeMOn: Story = { name: 'Size M / On', args: { label: 'Size M on', size: 'M', checked: true } };

export const AllStates: Story = {
  name: 'All States',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Toggle label="Off" size="L" />
      <Toggle label="On" size="L" checked />
      <Toggle label="Disabled off" size="L" disabled />
      <Toggle label="Disabled on" size="L" disabled checked />
      <div style={{ borderTop: '1px solid #eee', paddingTop: 16 }}>
        <p style={{ fontSize: 12, color: '#6e6e81', marginBottom: 12 }}>Size M</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Toggle label="Off" size="M" />
          <Toggle label="On" size="M" checked />
        </div>
      </div>
    </div>
  ),
};
