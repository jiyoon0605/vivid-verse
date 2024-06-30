'use client';

// @ts-ignore
import { Select, SelectItem } from '@nextui-org/select';
import React, { useEffect } from 'react';
import { useParams, usePathname, useRouter, useSelectedLayoutSegment } from 'next/navigation';
import Link from 'next/link';

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

export default function Header() {
  const router = useRouter();
  const { locale } = useParams<{ locale: Locale }>();
  const pathname = usePathname();
  const segment = useSelectedLayoutSegment();

  useEffect(() => {
    console.log(segment);
  }, [segment]);
  const onChangeLanguage = (newLang: Locale) => {
    router.push(`/${newLang}${pathname.slice(3)}`);
  };

  return (
    <header
      className={`
              w-dvw bg-background-100
              px-20
              max-sm:px-3
              max-sm:fixed
              top-0
              py-3
              shadow-md
              flex
              justify-between
              items-center
              z-10
              `}
    >
      <div>
        <nav className={'flex gap-4 items-center'}>
          <Link className={'mr-4'} href={'/'}>
            vivid verse
          </Link>
          <Link href={'/text/sentence'}>
            <svg
              fill="none"
              height="25px"
              viewBox="0 0 24 24"
              width="25px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 4V20M17 12V20M6 20H10M15 20H19M13 7V4H3V7M21 14V12H13V14"
                stroke={`${segment === 'text' ? '#3B3C3D' : '#CCCBC8'}`}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </Link>
          {/*<Link href={'/image'}>*/}
          {/*  <svg*/}
          {/*    fill="none"*/}
          {/*    height="25px"*/}
          {/*    viewBox="0 0 24 24"*/}
          {/*    width="25px"*/}
          {/*    xmlns="http://www.w3.org/2000/svg"*/}
          {/*  >*/}
          {/*    <path*/}
          {/*      d="M8 10L12 3L16 10H8Z"*/}
          {/*      stroke={`${segment === 'image' ? '#3B3C3D' : '#CCCBC8'}`}*/}
          {/*      strokeLinecap="round"*/}
          {/*      strokeLinejoin="round"*/}
          {/*      strokeWidth="2"*/}
          {/*    />*/}
          {/*    <path*/}
          {/*      d="M10 17.5C10 19.433 8.433 21 6.5 21C4.567 21 3 19.433 3 17.5C3 15.567 4.567 14 6.5 14C8.433 14 10 15.567 10 17.5Z"*/}
          {/*      stroke={`${segment === 'image' ? '#3B3C3D' : '#CCCBC8'}`}*/}
          {/*      strokeLinecap="round"*/}
          {/*      strokeLinejoin="round"*/}
          {/*      strokeWidth="2"*/}
          {/*    />*/}
          {/*    <path*/}
          {/*      d="M14 14H21V21H14V14Z"*/}
          {/*      stroke={`${segment === 'image' ? '#3B3C3D' : '#CCCBC8'}`}*/}
          {/*      strokeLinecap="round"*/}
          {/*      strokeLinejoin="round"*/}
          {/*      strokeWidth="2"*/}
          {/*    />*/}
          {/*  </svg>*/}
          {/*</Link>*/}
        </nav>
      </div>
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
    </header>
  );
}
