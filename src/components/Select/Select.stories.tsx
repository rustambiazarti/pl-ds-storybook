import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';
import React, { useState } from 'react';

const meta: Meta<typeof Select> = {
  title: 'Design System/Select',
  component: Select,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div style={{ width: 325 }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    size: {
      control: 'radio',
      options: ['L', 'M'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

const sampleOptions = [
  { value: 'uae', label: 'United Arab Emirates' },
  { value: 'usa', label: 'United States' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'de', label: 'Germany' },
  { value: 'fr', label: 'France' },
];

export const Default: Story = {
  args: {
    options: sampleOptions,
    label: 'Country',
    size: 'L',
  },
};

export const WithValue: Story = {
  args: {
    options: sampleOptions,
    label: 'Country',
    value: 'uae',
    size: 'L',
  },
};

export const SizeM: Story = {
  name: 'Size M',
  args: {
    options: sampleOptions,
    label: 'Country',
    size: 'M',
  },
};

export const WithPlaceholder: Story = {
  args: {
    options: sampleOptions,
    placeholder: 'Choose a country...',
    size: 'L',
  },
};

export const Error: Story = {
  args: {
    options: sampleOptions,
    label: 'Country',
    error: true,
    hint: 'Please select a country',
    size: 'L',
  },
};

export const Disabled: Story = {
  args: {
    options: sampleOptions,
    label: 'Country',
    value: 'uae',
    disabled: true,
    size: 'L',
  },
};

export const WithDisabledOptions: Story = {
  name: 'With Disabled Options',
  args: {
    options: [
      { value: 'uae', label: 'United Arab Emirates' },
      { value: 'usa', label: 'United States' },
      { value: 'uk', label: 'United Kingdom', disabled: true },
      { value: 'de', label: 'Germany' },
      { value: 'fr', label: 'France', disabled: true },
    ],
    label: 'Country',
    size: 'L',
  },
};

export const WithHint: Story = {
  args: {
    options: sampleOptions,
    label: 'Country',
    hint: 'Select your country of residence',
    size: 'L',
  },
};

const InteractiveTemplate = () => {
  const [value, setValue] = useState('');
  return (
    <Select
      options={sampleOptions}
      label="Country"
      value={value}
      onChange={setValue}
      size="L"
      hint={value ? `Selected: ${value}` : 'Select a country'}
    />
  );
};

export const Interactive: Story = {
  render: () => <InteractiveTemplate />,
};
