import type { Meta, StoryObj } from '@storybook/react';
import TitleTransition from '@/app/[locale]/_components/TitleTransition';

const meta = {
  title: 'Common/Title',
  component: TitleTransition,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof TitleTransition>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
