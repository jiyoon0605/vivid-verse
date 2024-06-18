import type { Meta, StoryObj } from '@storybook/react';

import { fn } from '@storybook/test';

import { BaseButton } from '@/components/common/button/BaseButton';

const meta = {
  title: 'Button/BaseButton',
  component: BaseButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
    isLoading: { control: 'boolean' },
    isDisabled: { control: 'boolean' },
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    variant: { control: 'radio', options: ['solid', 'bordered', 'ghost', 'shadow'] },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof BaseButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button',
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

export const Solid: Story = {
  args: {
    children: 'Button',
    variant: 'solid',
  },
};

export const Bordered: Story = {
  args: {
    children: 'Button',
    variant: 'bordered',
  },
};

export const Ghost: Story = {
  args: {
    children: 'Button',
    variant: 'ghost',
  },
};

export const Shadow: Story = {
  args: {
    children: 'Button',
    variant: 'shadow',
  },
};
