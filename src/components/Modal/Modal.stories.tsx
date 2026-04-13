import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import React from 'react';

const meta: Meta<typeof Modal> = {
  title: 'Design System/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    variant: {
      control: 'radio',
      options: ['popup', 'dialog'],
    },
    adaptive: {
      control: 'radio',
      options: ['desktop', 'touch'],
    },
  },
  args: {
    isOpen: true,
    title: 'Welcome',
    subtitle:
      'Something beautiful is about to happen. Your next goosebumps moment is just one step away.',
    primaryButtonText: 'Button',
    secondaryButtonText: 'Button',
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

const PlaceholderContent = () => (
  <div
    style={{
      background: '#f6ecfe',
      border: '1px dashed #7e05e8',
      borderRadius: 12,
      padding: '54px 0',
      textAlign: 'center',
      color: '#7e05e8',
      fontWeight: 600,
      fontSize: 14,
    }}
  >
    Swap instance to place
    <br />
    your content here
  </div>
);

// ---- Desktop variants ----

export const DesktopPopup: Story = {
  args: {
    variant: 'popup',
    adaptive: 'desktop',
    children: <PlaceholderContent />,
  },
};

export const DesktopDialog: Story = {
  args: {
    variant: 'dialog',
    adaptive: 'desktop',
  },
};

export const DesktopPopupNoBack: Story = {
  name: 'Desktop Popup (No Back Button)',
  args: {
    variant: 'popup',
    adaptive: 'desktop',
    showBackButton: false,
    children: <PlaceholderContent />,
  },
};

// ---- Touch variants ----

export const TouchBottomSheet: Story = {
  args: {
    variant: 'popup',
    adaptive: 'touch',
    children: <PlaceholderContent />,
  },
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
};

export const TouchDialog: Story = {
  args: {
    variant: 'dialog',
    adaptive: 'touch',
  },
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
};

// ---- With caption ----

export const TouchBottomSheetWithCaption: Story = {
  name: 'Touch BottomSheet with Caption',
  args: {
    variant: 'popup',
    adaptive: 'touch',
    showCaption: true,
    captionText: (
      <>
        By signing up to create an account I accept Platinumlist&apos;s{' '}
        <a href="#" style={{ color: '#1a56ff', textDecoration: 'none' }}>
          Terms of Use
        </a>{' '}
        and{' '}
        <a href="#" style={{ color: '#1a56ff', textDecoration: 'none' }}>
          Privacy policy
        </a>
      </>
    ),
    children: <PlaceholderContent />,
  },
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
};

// ---- Custom content ----

export const WithFormContent: Story = {
  name: 'Popup with Form Content',
  args: {
    variant: 'popup',
    adaptive: 'desktop',
    title: 'Sign In',
    subtitle: 'Enter your credentials to continue.',
    primaryButtonText: 'Sign In',
    secondaryButtonText: 'Cancel',
    children: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <input
          type="email"
          placeholder="Email"
          style={{
            padding: '14px 16px',
            borderRadius: 12,
            border: '1px solid #9999ac',
            fontSize: 16,
            fontFamily: 'Inter, sans-serif',
            outline: 'none',
          }}
        />
        <input
          type="password"
          placeholder="Password"
          style={{
            padding: '14px 16px',
            borderRadius: 12,
            border: '1px solid #9999ac',
            fontSize: 16,
            fontFamily: 'Inter, sans-serif',
            outline: 'none',
          }}
        />
      </div>
    ),
  },
};

export const DialogNoSubtitle: Story = {
  name: 'Dialog without Subtitle',
  args: {
    variant: 'dialog',
    adaptive: 'desktop',
    subtitle: '',
    title: 'Are you sure?',
    primaryButtonText: 'Confirm',
    secondaryButtonText: 'Cancel',
  },
};
