'use client';

import Link from 'next/link';

import ExampleSlider from '@/app/[locale]/_components/ExampleSlider';
import { BaseButton } from '@/components/common/button/BaseButton';
import TitleTransition from '@/app/[locale]/_components/TitleTransition';
import { useTranslations } from 'next-intl';

export default function MainSection() {
  const t = useTranslations();

  return (
    <section color={'pt-10'}>
      <div
        className={`
            w-full h-[calc(100dvh-64px)] 
            pt-16
            overflow-hidden
            flex flex-col items-center justify-center
            cursor-default
      `}
      >
        <div className={'mb-12 inline font-extrabold text-center'}>
          <TitleTransition />
          <h2
            dangerouslySetInnerHTML={{ __html: t.rich('main.slogan') }}
            className={'max-sm:text-lg text-4xl text-primary-200 mt-8 mb-12'}
          />
        </div>
        <ExampleSlider />
        <Link className={'mt-14'} href={'/sentence'}>
          <BaseButton size={'lg'} onClick={() => {}}>
            바로 시작하기
          </BaseButton>
        </Link>
      </div>
    </section>
  );
}
