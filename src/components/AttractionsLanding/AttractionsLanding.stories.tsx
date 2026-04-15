import type { Meta, StoryObj } from '@storybook/react';
import { AttractionsLanding } from './AttractionsLanding';

const meta: Meta<typeof AttractionsLanding> = {
  title: 'Pages/Attractions Landing',
  component: AttractionsLanding,
  parameters: {
    layout: 'fullscreen',
    backgrounds: { default: 'light' },
  },
};

export default meta;
type Story = StoryObj<typeof AttractionsLanding>;

export const Default: Story = {};
