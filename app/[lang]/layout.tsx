import React from 'react';

import * as Font from '@/config/fonts';
import { Locale } from '@/i18n-config';
import Header from '@/components/common/Header';
import NavTab from '@/components/common/NavTab';
import { getDictionary } from '@/dictionaries/dictionaries';

export default async function Layout({
  params: { lang },
  children,
}: {
  params: { lang: Locale };
  children: React.ReactNode;
}) {
  const i18n = await getDictionary(lang);
  const getFontByLang = () => {
    switch (lang) {
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

  return (
    <div className={getFontByLang()}>
      <Header />
      <main className={'text-text-100'}>
        <NavTab i18n={i18n} />
        {children}
      </main>
    </div>
  );
}
