import React from 'react';
import { getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { Toaster } from 'react-hot-toast';

import * as Font from '@/config/fonts';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

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
        <Footer />
      </div>
      <div>
        <Toaster />
      </div>
    </NextIntlClientProvider>
  );
}
