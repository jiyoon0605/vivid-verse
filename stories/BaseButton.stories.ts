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
    label: { control: 'text' },
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
    label: 'Button',
  },
};

export const Loading: Story = {
  args: {
    label: 'Button',
    isLoading: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Button',
    isDisabled: true,
  },
};

export const Solid: Story = {
  args: {
    label: 'Button',
    variant: 'solid',
  },
};

export const Bordered: Story = {
  args: {
    label: 'Button',
    variant: 'bordered',
  },
};

export const Ghost: Story = {
  args: {
    label: 'Button',
    variant: 'ghost',
  },
};

export const Shadow: Story = {
  args: {
    label: 'Button',
    variant: 'shadow',
  },
};
