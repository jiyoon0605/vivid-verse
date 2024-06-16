'use client';

import { Select, SelectItem } from '@nextui-org/select';
import React from 'react';
import { useParams, usePathname, useRouter } from 'next/navigation';

import { Locale } from '@/i18n-config';

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
    value: 'cn',
    label: 'Chinese',
  },
  {
    value: 'ja',
    label: 'Japanese',
  },
];

export default function Header() {
  const router = useRouter();
  const params = useParams<{ lang: Locale }>();
  const pathname = usePathname();

  const changeLanguage = (newLang: Locale) => {
    router.push(`/${newLang}${pathname.slice(3)}`);
  };

  return (
    <header
      className={`
              w-dvw bg-background-100
              px-20
              py-3
              shadow-md
              flex
              justify-between
              items-center
              `}
    >
      <div>vivid verse</div>
      <Select
        isRequired
        className={`
        max-w-32
        border-none
        font-bold
        [$>.*::after]:hidden
      `}
        color={'default'}
        defaultSelectedKeys={[params.lang]}
        size={'md'}
        onChange={e => changeLanguage(e.target.value as Locale)}
      >
        {Languages.map(({ value, label }) => (
          <SelectItem key={value} value={value}>
            {label}
          </SelectItem>
        ))}
      </Select>
    </header>
  );
}
