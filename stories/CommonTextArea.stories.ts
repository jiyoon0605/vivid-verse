import type { Meta, StoryObj } from '@storybook/react';

import { fn } from '@storybook/test';

import CommonTextArea from '@/components/common/input/CommonTextArea';

const meta = {
  title: 'Input/CommonTextArea',
  component: CommonTextArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
    isDisabled: { control: 'boolean' },
    isLoading: { control: 'boolean' },
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    placeholder: { control: 'text' },
    maxLength: { control: 'number' },
  },
  args: { onChange: fn() },
} satisfies Meta<typeof CommonTextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Common Text Area',
    value: 'value',
    placeholder: 'placeholder',
    maxLength: 10,
    isDisabled: false,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Common Text Area',
    value: 'value',
    placeholder: 'placeholder',
    maxLength: 10,
    isDisabled: true,
  },
};
