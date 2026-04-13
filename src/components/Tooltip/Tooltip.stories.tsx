import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './Tooltip';
import React from 'react';

const meta: Meta<typeof Tooltip> = {
  title: 'Design System/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    placement: {
      control: 'radio',
      options: ['top', 'bottom', 'left', 'right'],
    },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: 80 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

const TriggerButton = () => (
  <button
    style={{
      padding: '12px 24px',
      borderRadius: 12,
      border: 'none',
      background: '#ecedf2',
      fontFamily: 'Inter, sans-serif',
      fontWeight: 600,
      fontSize: 14,
      cursor: 'pointer',
    }}
  >
    Hover me
  </button>
);

export const Top: Story = {
  args: {
    text: 'Tooltip text',
    placement: 'top',
    visible: true,
    children: <TriggerButton />,
  },
};

export const Bottom: Story = {
  args: {
    text: 'Tooltip text',
    placement: 'bottom',
    visible: true,
    children: <TriggerButton />,
  },
};

export const Left: Story = {
  args: {
    text: 'Tooltip text',
    placement: 'left',
    visible: true,
    children: <TriggerButton />,
  },
};

export const Right: Story = {
  args: {
    text: 'Tooltip text',
    placement: 'right',
    visible: true,
    children: <TriggerButton />,
  },
};

export const HoverToReveal: Story = {
  name: 'Hover to Reveal',
  args: {
    text: 'This appears on hover',
    placement: 'top',
    children: <TriggerButton />,
  },
};

export const AllPlacements: Story = {
  name: 'All Placements',
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 64,
        padding: 40,
      }}
    >
      <Tooltip text="Top tooltip" placement="top" visible>
        <TriggerButton />
      </Tooltip>
      <Tooltip text="Bottom tooltip" placement="bottom" visible>
        <TriggerButton />
      </Tooltip>
      <Tooltip text="Left tooltip" placement="left" visible>
        <TriggerButton />
      </Tooltip>
      <Tooltip text="Right tooltip" placement="right" visible>
        <TriggerButton />
      </Tooltip>
    </div>
  ),
};
