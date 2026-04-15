import type { Meta, StoryObj } from '@storybook/react';
import { TextInput } from './TextInput';

const meta = {
  title: 'Inputs/TextInput',
  component: TextInput,
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
    showRightIcon: { control: 'boolean' },
    showLeftIcon: { control: 'boolean' },
    showButton: { control: 'boolean' },
    buttonText: { control: 'text' },
  },
} satisfies Meta<typeof TextInput>;

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
    showRightIcon: true,
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
    showRightIcon: true,
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
    showRightIcon: true,
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
    showRightIcon: true,
  },
};

export const WithLeftIcon: Story = {
  name: 'Size L / Left Icon',
  args: {
    size: 'L',
    label: 'Search',
    hint: 'Hint',
    showHint: true,
    showLeftIcon: true,
    showRightIcon: false,
  },
};

export const WithButton: Story = {
  name: 'Size L / With Button',
  args: {
    size: 'L',
    label: 'Label',
    value: 'Content',
    hint: 'Hint',
    showHint: true,
    showRightIcon: false,
    showButton: true,
    buttonText: 'Edit',
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
    error: false,
    disabled: false,
    showRightIcon: true,
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
    showRightIcon: true,
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
    showRightIcon: true,
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
    showRightIcon: true,
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
        <TextInput size="L" label="Label" showRightIcon />
      </div>
      <div>
        <p style={{ marginBottom: 8, fontSize: 12, color: '#6e6e81' }}>
          Default (with content)
        </p>
        <TextInput size="L" label="Label" value="Content" showRightIcon />
      </div>
      <div>
        <p style={{ marginBottom: 8, fontSize: 12, color: '#6e6e81' }}>
          Error (no content)
        </p>
        <TextInput size="L" label="Label" error showRightIcon hint="Hint" />
      </div>
      <div>
        <p style={{ marginBottom: 8, fontSize: 12, color: '#6e6e81' }}>
          Error (with content)
        </p>
        <TextInput
          size="L"
          label="Label"
          value="Content"
          error
          showRightIcon
          hint="Hint"
        />
      </div>
      <div>
        <p style={{ marginBottom: 8, fontSize: 12, color: '#6e6e81' }}>
          Disabled (no content)
        </p>
        <TextInput size="L" label="Label" disabled showRightIcon />
      </div>
      <div>
        <p style={{ marginBottom: 8, fontSize: 12, color: '#6e6e81' }}>
          Disabled (with content)
        </p>
        <TextInput
          size="L"
          label="Label"
          value="Content"
          disabled
          showRightIcon
        />
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
        <TextInput size="M" label="Label" showRightIcon />
      </div>
      <div>
        <p style={{ marginBottom: 8, fontSize: 12, color: '#6e6e81' }}>
          Default (with content)
        </p>
        <TextInput size="M" label="Label" value="Content" showRightIcon />
      </div>
      <div>
        <p style={{ marginBottom: 8, fontSize: 12, color: '#6e6e81' }}>
          Error
        </p>
        <TextInput size="M" label="Label" error showRightIcon hint="Hint" />
      </div>
      <div>
        <p style={{ marginBottom: 8, fontSize: 12, color: '#6e6e81' }}>
          Disabled
        </p>
        <TextInput size="M" label="Label" disabled showRightIcon />
      </div>
    </div>
  ),
};
