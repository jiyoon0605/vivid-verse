import type { Meta, StoryObj } from '@storybook/react';

import Header from '@/components/common/Header';

const meta = {
  title: 'Common/Header',
  component: Header,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    Story => (
      <div style={{ width: '100dvw' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},

  parameters: {
    nextjs: {
      router: {
        pathname: '/[lang]',
        asPath: '/en',
      },
    },
  },
};
