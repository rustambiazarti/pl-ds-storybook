import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

const meta = {
  title: 'Data Display/Avatar',
  component: Avatar,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'radio' }, options: ['XL', 'L', 'M', 'S', 'XS'] },
    name: { control: 'text' },
    src: { control: 'text' },
    status: { control: { type: 'radio' }, options: ['none', 'online', 'offline', 'away'] },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Initials: Story = { args: { name: 'John Doe', size: 'L' } };
export const WithImage: Story = {
  args: {
    name: 'Jane Smith',
    size: 'L',
    src: 'https://i.pravatar.cc/150?img=5',
  },
};
export const Online: Story = { args: { name: 'Alex', size: 'L', status: 'online' } };
export const Away: Story = { args: { name: 'Sam', size: 'L', status: 'away' } };
export const Offline: Story = { args: { name: 'Kim', size: 'L', status: 'offline' } };

export const AllSizes: Story = {
  name: 'All Sizes',
  render: () => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <Avatar size="XL" name="John Doe" status="online" />
      <Avatar size="L" name="Jane Smith" status="online" />
      <Avatar size="M" name="Alex B" />
      <Avatar size="S" name="Sam K" />
      <Avatar size="XS" name="P" />
    </div>
  ),
};

export const WithImages: Story = {
  name: 'With Images',
  render: () => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <Avatar size="XL" src="https://i.pravatar.cc/150?img=1" name="User 1" status="online" />
      <Avatar size="L" src="https://i.pravatar.cc/150?img=2" name="User 2" status="away" />
      <Avatar size="M" src="https://i.pravatar.cc/150?img=3" name="User 3" />
      <Avatar size="S" src="https://i.pravatar.cc/150?img=4" name="User 4" />
      <Avatar size="XS" src="https://i.pravatar.cc/150?img=5" name="User 5" />
    </div>
  ),
};
