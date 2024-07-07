'use client';

import { useParams, usePathname, useRouter, useSelectedLayoutSegment } from 'next/navigation';
import { Select, SelectItem } from '@nextui-org/select';
import React from 'react';

import { Locale } from '@/types';

const Languages = [
  {
    value: 'en',
    label: 'English',
  },
  {
    value: 'ko',
    label: 'Korean',
  },
  {
    value: 'zh',
    label: 'Chinese',
  },
  {
    value: 'ja',
    label: 'Japanese',
  },
];

export default function LanguageSelector() {
  const router = useRouter();
  const pathname = usePathname();
  const segment = useSelectedLayoutSegment();
  const { locale } = useParams<{ locale: Locale }>();

  const onChangeLanguage = (newLang: Locale) => {
    router.push(`/${newLang}${pathname.slice(3)}`);
  };

  return (
    <Select
      isRequired
      aria-label={'language selector'}
      className={`
        max-w-32
        border-none
        font-bold
        [$>.*::after]:hidden
      `}
      color={'default'}
      defaultSelectedKeys={[locale]}
      disabledKeys={[locale]}
      size={'md'}
      onChange={(e) => onChangeLanguage(e.target.value as Locale)}
    >
      {Languages.map(({ value, label }) => (
        <SelectItem key={value} value={value}>
          {label}
        </SelectItem>
      ))}
    </Select>
  );
}
