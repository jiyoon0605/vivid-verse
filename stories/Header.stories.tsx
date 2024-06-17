import type { Meta, StoryObj } from '@storybook/react';

import Header from '@/components/common/Header';
import { getRouter } from '@storybook/nextjs/router.mock';

const meta = {
  title: 'Common/Header',
  component: Header,
  parameters: {
    layout: 'centered',
    appDirectory: true,
  },
  decorators: [
    Story => (
      <div style={{width: '100dvw'}}>
        <Story/>
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
      basePath: '/en/',
      appDirectory: true,
    },
  },
};
