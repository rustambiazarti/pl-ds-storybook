import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta = {
  title: 'Data Display/Badge',
  component: Badge,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: { type: 'radio' }, options: ['neutral', 'primary', 'success', 'warning', 'error'] },
    size: { control: { type: 'radio' }, options: ['L', 'M', 'S'] },
    dot: { control: 'boolean' },
    children: { control: 'text' },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Neutral: Story = { args: { children: 'Badge', variant: 'neutral' } };
export const Primary: Story = { args: { children: 'Badge', variant: 'primary' } };
export const Success: Story = { args: { children: 'Active', variant: 'success' } };
export const Warning: Story = { args: { children: 'Pending', variant: 'warning' } };
export const ErrorBadge: Story = { name: 'Error', args: { children: 'Error', variant: 'error' } };
export const WithDot: Story = { args: { children: 'Online', variant: 'success', dot: true } };
export const SizeL: Story = { name: 'Size L', args: { children: 'Large', size: 'L' } };
export const SizeS: Story = { name: 'Size S', args: { children: 'Small', size: 'S' } };

export const AllVariants: Story = {
  name: 'All Variants',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {(['L', 'M', 'S'] as const).map((size) => (
        <div key={size} style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <span style={{ fontSize: 12, color: '#6e6e81', width: 40 }}>{size}</span>
          <Badge size={size} variant="neutral">Neutral</Badge>
          <Badge size={size} variant="primary">Primary</Badge>
          <Badge size={size} variant="success" dot>Active</Badge>
          <Badge size={size} variant="warning">Pending</Badge>
          <Badge size={size} variant="error">Error</Badge>
        </div>
      ))}
    </div>
  ),
};
