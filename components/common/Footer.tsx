'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import LanguageSelector from '@/components/common/LanguageSelector';
import Github from '@/public/icon/github.svg';
import Blog from '@/public/icon/blog.svg';
import X from '@/public/icon/x.svg';

export default function Footer() {
  return (
    <footer className={'w-dvh bg-background-300'}>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 container mx-auto px-4 md:px-8 py-4">
        {/* 프로젝트 정보 */}
        <div>
          <h2 className="text-lg font-semibold mb-4">PROJECT INFO</h2>
          <Link className={'flex items-center'} href={'https://github.com/jiyoon0605/vivid-verse'}>
            <Image alt={'github'} className={'mr-2'} height={30} src={Github.src} width={30} />
            <strong>Vivid Verse</strong>
          </Link>
          <p className={'my-2'}>Dev. Lee Jiyoon</p>
        </div>
        {/* 내비게이션 링크 */}
        <div>
          <h2 className="text-lg font-semibold mb-4">NAVIGATION</h2>
          <ul>
            <li>
              <strong>HOME</strong>
              <ul className={'ml-2'}>
                <li>
                  <Link className="hover:text-background-200" href="/">
                    Home
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <strong>Text</strong>
              <ul className={'ml-2'}>
                <li>
                  <Link className="hover:text-background-200" href="/text/sentence">
                    Sentence
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-background-200" href="/text/paragraph">
                    Paragraph
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">BLOG & SNS</h2>
          <div className={'flex gap-2'}>
            <Link href={'https://juniverse-dev.vercel.app/'}>
              <Image alt={'blog'} height={30} src={Blog.src} width={30} />
            </Link>
            <Link href={'https://github.com/jiyoon0605/vivid-verse'}>
              <Image alt={'github'} height={30} src={Github.src} width={30} />
            </Link>
            <Link href={'https://x.com/yook_oh'}>
              <Image alt={'X'} height={30} src={X.src} width={30} />
            </Link>
          </div>
        </div>
        {/* 언어 및 지역 설정 */}
        <div>
          <h2 className="text-lg font-semibold mb-4">LANGUAGE</h2>
          <LanguageSelector />
        </div>
      </div>
      {/* 카피라이트 정보 */}
      <div className="text-center border-t border-gray-700 my-8 py-4">
        <p>© 2024 Vivid Verse. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
