import React from 'react';

import * as Font from '@/config/fonts';
import { Locale } from '@/i18n-config';
import Header from '@/components/common/Header';

export default function Layout({ params: { lang }, children }: { params: { lang: Locale }; children: React.ReactNode }) {
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
      {children}
    </div>
  );
}
