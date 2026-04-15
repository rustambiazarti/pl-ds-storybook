import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from './Divider';
import React from 'react';

const meta: Meta<typeof Divider> = {
  title: 'Data Display/Divider',
  component: Divider,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div style={{ width: 400 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
  },
};

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
  },
  decorators: [
    (Story) => (
      <div style={{ height: 80, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Story />
      </div>
    ),
  ],
};

export const WithText: Story = {
  args: {
    text: 'or',
    orientation: 'horizontal',
  },
};

export const WithLongerText: Story = {
  name: 'With Longer Text',
  args: {
    text: 'continue with',
    orientation: 'horizontal',
  },
};

export const InContext: Story = {
  name: 'In Context',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, fontFamily: 'Inter, sans-serif' }}>
      <div style={{ padding: '12px 0', fontSize: 14 }}>
        Content above the divider
      </div>
      <Divider />
      <div style={{ padding: '12px 0', fontSize: 14 }}>
        Content below the divider
      </div>
      <Divider text="or" />
      <div style={{ padding: '12px 0', fontSize: 14 }}>
        Alternative content section
      </div>
    </div>
  ),
};
