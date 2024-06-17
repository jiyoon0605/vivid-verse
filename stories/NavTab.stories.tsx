import type { Meta, StoryObj } from '@storybook/react';

import NavTab from '@/components/common/NavTab';

const meta = {
  title: 'Common/NavTab',
  component: NavTab,
  parameters: {
    layout: 'centered',
    appDirectory: true,
  },
  tags: ['autodocs'],
  argTypes: {
    i18n: {
      control: {
        type: 'object',
        defaultValue: {
          nav: {
            sentence: 'Sentence',
            paragraph: 'Paragraph',
          },
        },
      },
    },
  },
  args: {
    i18n: {
      nav: {
        sentence: 'Sentence',
        paragraph: 'Paragraph',
      },
    },
  },
} satisfies Meta<typeof NavTab>;

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
