import { DefaultPageProps } from '@/types';
import SentenceForm from '@/app/[locale]/sentence/_components/SentenceForm';
import { getTranslations } from 'next-intl/server';

export default async function Page({params: {locale}}: DefaultPageProps) {
  const t = await getTranslations({locale, namespace: 'sentence'});
  
  return (
    <div>
      <h1 className={'mt-12 font-bold text-lg animate-appear-right'}>
        {t('title')}
      </h1>
      <p className={'mt-3 w-1/2 animate-[appear-right_0.8s_ease-out]'}>
        {t('description')}
      </p>
      <SentenceForm/>
    </div>
  );
}
