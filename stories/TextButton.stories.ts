import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { TextButton } from '@/components/common/button/TextButton';

const meta = {
  title: 'Button/TextButton',
  component: TextButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    isLoading: { control: 'boolean' },
    isDisabled: { control: 'boolean' },
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    variant: { control: 'radio', options: ['solid', 'bordered', 'ghost', 'shadow'] },
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
