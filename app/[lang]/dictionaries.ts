import 'server-only';
import type { Locale } from '@/i18n-config';

const dictionaries = {
  en: () => import('@/dictionaries/en.json').then(module => module.default),
  ko: () => import('@/dictionaries/ko.json').then(module => module.default),
  ja: () => import('@/dictionaries/ja.json').then(module => module.default),
  cn: () => import('@/dictionaries/cn.json').then(module => module.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]?.() ?? dictionaries.en();
