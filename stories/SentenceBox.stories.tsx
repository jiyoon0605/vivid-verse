import { Meta, type StoryObj } from '@storybook/react';

import SentenceBox from '@/app/[locale]/text/sentence/_components/SentenceBox';

const meta = {
  title: 'Sentence/SentenceBox',
  component: SentenceBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SentenceBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Vision: Story = {
  args: {
    sense: 'VISION',
    sentence: 'test sentence',
  },
};

export const Hearing: Story = {
  args: {
    sense: 'HEARING',
    sentence: 'test sentence',
  },
};

export const Smell: Story = {
  args: {
    sense: 'SMELL',
    sentence: 'test sentence',
  },
};

export const Taste: Story = {
  args: {
    sense: 'TASTE',
    sentence: 'test sentence',
  },
};

export const Touch: Story = {
  args: {
    sense: 'TOUCH',
    sentence: 'test sentence',
  },
};
