import type { Preview } from '@storybook/react';
import '@/styles/globals.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextjs: {
      router: {
        basePath: '/en/',
        appDirectory: true,
      },
    },
  },
};

export default preview;
