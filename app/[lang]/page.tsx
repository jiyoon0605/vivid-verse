import { getDictionary } from './dictionaries';
import type { Locale } from '@/i18n-config';
export default async function Page({ params: { lang } }: { params: { lang: Locale } }) {
  const dict = await getDictionary(lang);

  let fontClass = '';

  switch (lang) {
    case 'ko':
      fontClass = 'font-ibm-kr';
      break;
    case 'en':
      fontClass = 'font-ibm-en';
      break;
    case 'ja':
      fontClass = 'font-ibm-ja';
      break;
    default:
      fontClass = 'font-ibm-en'; // 기본 폰트 설정
  }

  return <div className={fontClass}>{dict.test}</div>;
}
