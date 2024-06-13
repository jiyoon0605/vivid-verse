import { Noto_Sans_KR, Roboto, Noto_Sans_JP, Noto_Sans_TC } from 'next/font/google';

export const fontNotoKr = Noto_Sans_KR({
  weight: ['100', '300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-noto-kr',
});

export const fontNotoJa = Noto_Sans_JP({
  weight: ['100', '300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-noto-ja',
});

export const fontNotoCn = Noto_Sans_TC({
  weight: ['100', '300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-noto-cn',
});
export const fontRobotoEn = Roboto({
  weight: ['100', '300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto-en',
});
