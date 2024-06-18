import type { Preview } from '@storybook/react';
import '@/styles/globals.css';
import { IntlProvider, AbstractIntlMessages } from 'next-intl';
// @ts-ignore
import type { Locale } from '@/types';
import { useEffect, useState } from 'react';

export const globalTypes = {
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'en', right: '🇺🇸', title: 'English' },
        { value: 'ko', right: '🇰🇷', title: 'Korean' },
        { value: 'ja', right: '🇯🇵', title: 'Japanese' },
        { value: 'zh', right: '🇨🇳', title: 'Chinese' },
      ],
      showName: true,
    },
  },
};

const loadLocaleData = async (locale: Locale) => {
  switch (locale) {
    case 'ko':
      return await import('../messages/ko.json');
    case 'ja':
      return await import('../messages/ja.json');
    case 'zh':
      return await import('../messages/zh.json');
    default:
      return await import('../messages/en.json');
  }
};

export const decorators = [
  (Story: any, context: any) => {
    const [messages, setMessages] = useState<AbstractIntlMessages | null>(null);
    const locale = context.globals.locale || 'en';

    useEffect(() => {
      const fetchMessages = async () => {
        const localeMessages: AbstractIntlMessages = await loadLocaleData(locale);
        setMessages(localeMessages);
      };
      fetchMessages();
    }, [locale]);

    if (!messages) {
      return null;
    }
    return (
      <IntlProvider locale={locale} messages={messages}>
        <Story {...context} />
      </IntlProvider>
    );
  },
];

const preview: Preview = {
  parameters: {
    nextjs: {
      router: {
        basePath: '/en/',
        appDirectory: true,
      },
    },
  },
};

export default preview;
