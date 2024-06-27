import React from 'react';
import { getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';

import * as Font from '@/config/fonts';
import Header from '@/components/common/Header';
import { Toaster } from 'react-hot-toast';

export default async function Layout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const getFontByLang = () => {
    switch (locale) {
      case 'ko':
        return `${Font.fontNotoKr.className}`;
      case 'ja':
        return `${Font.fontNotoJa.className}`;
      case 'zh':
        return `${Font.fontNotoZh.className}`;
      default:
        return `${Font.fontRobotoEn.className}`;
    }
  };

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <div className={getFontByLang()}>
        <Header />
        {children}
      </div>
      <div>
        <Toaster />
      </div>
    </NextIntlClientProvider>
  );
}
