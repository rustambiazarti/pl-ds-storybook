import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from './Tag';

const meta: Meta<typeof Tag> = {
  title: 'Data Display/Tag',
  component: Tag,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: {
      control: 'radio',
      options: ['flexible', 'icon-only'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: {
    children: 'Text',
    selected: false,
    disabled: false,
    type: 'flexible',
  },
};

export const Selected: Story = {
  args: {
    children: 'Text',
    selected: true,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Text',
    disabled: true,
  },
};

export const DisabledSelected: Story = {
  name: 'Disabled + Selected',
  args: {
    children: 'Text',
    selected: true,
    disabled: true,
  },
};

export const IconOnly: Story = {
  args: {
    type: 'icon-only',
    selected: false,
  },
};

export const IconOnlySelected: Story = {
  name: 'Icon Only Selected',
  args: {
    type: 'icon-only',
    selected: true,
  },
};

export const IconOnlyDisabled: Story = {
  name: 'Icon Only Disabled',
  args: {
    type: 'icon-only',
    disabled: true,
  },
};

export const AllStates: Story = {
  name: 'All States',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <Tag>Default</Tag>
        <Tag selected>Selected</Tag>
        <Tag disabled>Disabled</Tag>
        <Tag selected disabled>
          Sel+Dis
        </Tag>
      </div>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <Tag type="icon-only" />
        <Tag type="icon-only" selected />
        <Tag type="icon-only" disabled />
        <Tag type="icon-only" selected disabled />
      </div>
    </div>
  ),
};
