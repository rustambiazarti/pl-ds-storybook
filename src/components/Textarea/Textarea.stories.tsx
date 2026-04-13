import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './Textarea';

const meta = {
  title: 'Design System/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['L', 'M'],
    },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    hint: { control: 'text' },
    showHint: { control: 'boolean' },
    error: { control: 'boolean' },
    disabled: { control: 'boolean' },
    resizable: { control: 'boolean' },
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

/* ---- Size L ---- */

export const DefaultL: Story = {
  name: 'Size L / Default',
  args: {
    size: 'L',
    label: 'Label',
    placeholder: 'Placeholder',
    hint: 'Hint',
    showHint: true,
    error: false,
    disabled: false,
  },
};

export const WithContentL: Story = {
  name: 'Size L / With Content',
  args: {
    size: 'L',
    label: 'Label',
    value: 'Content',
    hint: 'Hint',
    showHint: true,
  },
};

export const ErrorL: Story = {
  name: 'Size L / Error',
  args: {
    size: 'L',
    label: 'Label',
    hint: 'This field is required',
    showHint: true,
    error: true,
  },
};

export const DisabledL: Story = {
  name: 'Size L / Disabled',
  args: {
    size: 'L',
    label: 'Label',
    hint: 'Hint',
    showHint: true,
    disabled: true,
  },
};

/* ---- Size M ---- */

export const DefaultM: Story = {
  name: 'Size M / Default',
  args: {
    size: 'M',
    label: 'Label',
    placeholder: 'Placeholder',
    hint: 'Hint',
    showHint: true,
  },
};

export const WithContentM: Story = {
  name: 'Size M / With Content',
  args: {
    size: 'M',
    label: 'Label',
    value: 'Content',
    hint: 'Hint',
    showHint: true,
  },
};

export const ErrorM: Story = {
  name: 'Size M / Error',
  args: {
    size: 'M',
    label: 'Label',
    hint: 'This field is required',
    showHint: true,
    error: true,
  },
};

export const DisabledM: Story = {
  name: 'Size M / Disabled',
  args: {
    size: 'M',
    label: 'Label',
    hint: 'Hint',
    showHint: true,
    disabled: true,
  },
};

/* ---- All States Overview ---- */

export const AllStatesL: Story = {
  name: 'Size L / All States',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <p style={{ marginBottom: 8, fontSize: 12, color: '#6e6e81' }}>
          Default (no content)
        </p>
        <Textarea size="L" label="Label" />
      </div>
      <div>
        <p style={{ marginBottom: 8, fontSize: 12, color: '#6e6e81' }}>
          Default (with content)
        </p>
        <Textarea size="L" label="Label" value="Content" />
      </div>
      <div>
        <p style={{ marginBottom: 8, fontSize: 12, color: '#6e6e81' }}>
          Error
        </p>
        <Textarea size="L" label="Label" error hint="Hint" />
      </div>
      <div>
        <p style={{ marginBottom: 8, fontSize: 12, color: '#6e6e81' }}>
          Disabled
        </p>
        <Textarea size="L" label="Label" disabled />
      </div>
    </div>
  ),
};

export const AllStatesM: Story = {
  name: 'Size M / All States',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <p style={{ marginBottom: 8, fontSize: 12, color: '#6e6e81' }}>
          Default (no content)
        </p>
        <Textarea size="M" label="Label" />
      </div>
      <div>
        <p style={{ marginBottom: 8, fontSize: 12, color: '#6e6e81' }}>
          Default (with content)
        </p>
        <Textarea size="M" label="Label" value="Content" />
      </div>
      <div>
        <p style={{ marginBottom: 8, fontSize: 12, color: '#6e6e81' }}>
          Error
        </p>
        <Textarea size="M" label="Label" error hint="Hint" />
      </div>
      <div>
        <p style={{ marginBottom: 8, fontSize: 12, color: '#6e6e81' }}>
          Disabled
        </p>
        <Textarea size="M" label="Label" disabled />
      </div>
    </div>
  ),
};
