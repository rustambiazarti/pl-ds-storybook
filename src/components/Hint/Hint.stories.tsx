import type { Meta, StoryObj } from '@storybook/react';
import { Hint } from './Hint';

const meta = {
  title: 'Feedback/Hint',
  component: Hint,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
    showIcon: { control: 'boolean' },
    error: { control: 'boolean' },
  },
} satisfies Meta<typeof Hint>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'Hint text goes here',
    showIcon: false,
    error: false,
  },
};

export const WithIcon: Story = {
  args: {
    text: 'Hint with icon',
    showIcon: true,
    error: false,
  },
};

export const Error: Story = {
  args: {
    text: 'This field is required',
    showIcon: true,
    error: true,
  },
};
