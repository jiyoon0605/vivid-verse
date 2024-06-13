import * as Font from '@/config/fonts';
import { Locale } from '@/i18n-config';
import React from 'react';

export default function Layout({ params: { lang }, children }: { params: { lang: Locale }; children: React.ReactNode }) {
  const getFontByLang = () => {
    switch (lang) {
      case 'ko':
        return `${Font.fontNotoKr.className}`;
      case 'ja':
        return `${Font.fontNotoJa.className}`;
      case 'cn':
        return `${Font.fontNotoCn.className}`;
      default:
        return `${Font.fontRobotoEn.className}`;
    }
  };

  return <div className={getFontByLang()}>{children}</div>;
}
