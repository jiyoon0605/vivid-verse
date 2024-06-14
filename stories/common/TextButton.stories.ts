import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { TextButton } from '@/components/common/button/TextButton';

const meta = {
  title: 'Common/TextButton',
  component: TextButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof TextButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Button',
  },
};