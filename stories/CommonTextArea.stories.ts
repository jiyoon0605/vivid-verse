import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { TextButton } from '@/components/common/button/TextButton';
import CommonTextArea from '@/components/common/input/CommonTextArea';

const meta = {
  title: 'Input/CommonTextArea',
  component: CommonTextArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'text' },
    isDisabled: { control: 'boolean' },
    isLoading: { control: 'boolean' },
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    placeholder: { control: 'text' },
  },
  args: { onChange: fn() },
} satisfies Meta<typeof CommonTextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 'Text Area',
  },
};
