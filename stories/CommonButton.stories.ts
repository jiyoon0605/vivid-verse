import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { CommonButton } from '@/components/common/button/CommonButton';

const meta = {
  title: 'Common/CommonButton',
  component: CommonButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof CommonButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Button',
  },
};