import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { BaseButton } from '@/components/common/button/BaseButton';

const meta = {
  title: 'Common/BaseButton',
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
