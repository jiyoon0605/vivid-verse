import type { Preview } from '@storybook/react';
import '@/styles/globals.css';
import { getRouter } from '@storybook/nextjs/router.mock';

const preview: Preview = {
  parameters: {
    nextjs: {
      router: {
        basePath: '/en/',
        appDirectory: true,
      },
    },
    async beforeEach() {
      // 👇 Manipulate the default router method mocks
      getRouter().push.mockImplementation(() => {
        /* ... */
      });
    },
  },
};

export default preview;
