'use client';

import React from 'react';
import { useSelectedLayoutSegment } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/public/logo.png';
import LanguageSelector from '@/components/common/LanguageSelector';

export default function Header() {
  const segment = useSelectedLayoutSegment();

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
            <Image alt={'Vivid verse'} height={50} src={Logo.src} width={50} />
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
      <LanguageSelector />
    </header>
  );
}
