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
    children: { control: 'text' },
    isLoading: { control: 'boolean' },
    isDisabled: { control: 'boolean' },
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof TextButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button',
  },
};

export const Active: Story = {
  args: {
    children: 'Button',
    isSelected: true,
  },
};

export const Loading: Story = {
  args: {
    children: 'Button',
    isLoading: true,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Button',
    isDisabled: true,
  },
};
