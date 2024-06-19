import type { Meta, StoryObj } from '@storybook/react';

import { fn } from '@storybook/test';

import ChipRadioGroup from '@/components/common/input/ChipRadioGroup';

const meta = {
  title: 'Input/ChipRadioGroup',
  component: ChipRadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: { onChange: fn() },
} satisfies Meta<typeof ChipRadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <ChipRadioGroup.Chip value="1">Option 1</ChipRadioGroup.Chip>
        <ChipRadioGroup.Chip value="2">Option 2</ChipRadioGroup.Chip>
        <ChipRadioGroup.Chip value="3">Option 3</ChipRadioGroup.Chip>
      </>
    ),
  },
};
