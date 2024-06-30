import type { Meta, StoryObj } from '@storybook/react';
import ImageInput from '@/components/common/input/ImageInput';

const meta = {
  title: 'Input/Image Input',
  component: ImageInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof ImageInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
