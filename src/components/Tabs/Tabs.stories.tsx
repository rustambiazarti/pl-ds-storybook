import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';

const meta = {
  title: 'Design System/Tabs',
  component: Tabs,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'radio' }, options: ['L', 'M'] },
    fullWidth: { control: 'boolean' },
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultItems = [
  { key: 'tab1', label: 'Overview' },
  { key: 'tab2', label: 'Details' },
  { key: 'tab3', label: 'Reviews' },
];

export const Default: Story = {
  args: { items: defaultItems, activeKey: 'tab1', size: 'L' },
};

export const SizeM: Story = {
  name: 'Size M',
  args: { items: defaultItems, activeKey: 'tab1', size: 'M' },
};

export const FourTabs: Story = {
  name: 'Four Tabs',
  args: {
    items: [
      { key: '1', label: 'Tab 1' },
      { key: '2', label: 'Tab 2' },
      { key: '3', label: 'Tab 3' },
      { key: '4', label: 'Tab 4' },
    ],
    activeKey: '2',
    size: 'L',
  },
};

export const WithDisabled: Story = {
  name: 'With Disabled Tab',
  args: {
    items: [
      { key: '1', label: 'Active' },
      { key: '2', label: 'Available' },
      { key: '3', label: 'Disabled', disabled: true },
    ],
    activeKey: '1',
    size: 'L',
  },
};

export const FullWidth: Story = {
  name: 'Full Width',
  render: () => (
    <div style={{ width: 400 }}>
      <Tabs
        items={defaultItems}
        activeKey="tab1"
        size="L"
        fullWidth
      />
    </div>
  ),
};

export const Comparison: Story = {
  name: 'Size Comparison',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <p style={{ fontSize: 12, color: '#6e6e81', marginBottom: 8 }}>Size L</p>
        <Tabs items={defaultItems} activeKey="tab1" size="L" />
      </div>
      <div>
        <p style={{ fontSize: 12, color: '#6e6e81', marginBottom: 8 }}>Size M</p>
        <Tabs items={defaultItems} activeKey="tab1" size="M" />
      </div>
    </div>
  ),
};
