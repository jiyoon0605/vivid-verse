import { getTranslations } from 'next-intl/server';

import { DefaultPageProps } from '@/types';
import SentenceForm from '@/app/[locale]/(main)/sentence/_components/SentenceForm';

export default async function Page({ params: { locale } }: DefaultPageProps) {
  const t = await getTranslations({ locale });

  return (
    <div>
      <h1 className={'mt-12 font-bold text-lg animate-appear-right'}>{t('sentence.title')}</h1>
      <p className={'mt-3 lg:w-1/2 animate-[appear-right_0.8s_ease-out]'}>
        {t('sentence.description')}
      </p>
      <p className={'pt-2 text-text-300'}>
        ex) {t('example.example_2.pre')}({t('sense.smell')})<br />
        {'->'} {t('example.example_2.next')}({t('sense.taste')})
      </p>
      <SentenceForm />
    </div>
  );
}
