'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { changeSentence } from '@/lib/api/ai';
import { SenseResult, SentenceConvertResponse } from '@/types';
import SentenceBox from '@/app/[locale]/(main)/sentence/_components/SentenceBox';
import { useTranslations } from 'next-intl';
import { Spinner } from '@nextui-org/spinner';
import { BaseButton } from '@/components/common/button/BaseButton';

export default function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const t = useTranslations('sentence.result');
  const [result, setResult] = useState<string[][]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const sentence = searchParams.get('sentence');
  const sense = searchParams.get('sense');

  useEffect(() => {
    if (!loading) {
      return;
    }
    if (!sentence || !sense) {
      router.push('/sentence');
      return;
    }
    changeSentence(sentence, sense as SenseResult)
      .then((res: SentenceConvertResponse) => {
        setResult(Object.entries(res).filter(([key]) => key.toUpperCase() !== sense.toUpperCase()));
      })
      .finally(() => setLoading(false));
  }, [loading]);

  const onReRequest = () => {
    setLoading(true);
    router.refresh();
  };

  return (
    <div>
      <p className={'text-text-200 font-bold text-xl'}>{t('original')}</p>
      {sense && <SentenceBox sense={sense as SenseResult} sentence={sentence as string} />}
      <p className={'text-text-200 font-bold text-xl mt-10'}>{t('changed')}</p>
      <div>
        {loading ? (
          <div className={'w-full h-[30dvh] flex justify-center items-center'}>
            <Spinner label="LOADING..." size={'lg'} className={'font-bold'} />
          </div>
        ) : (
          <>
            {result.map(([sense, sentence]) => (
              <SentenceBox sense={sense as SenseResult} sentence={sentence} />
            ))}
          </>
        )}
      </div>
      <div className={'mt-14 flex justify-center'}>
        <BaseButton size={'lg'} onClick={onReRequest}>{t('reRequest')}</BaseButton>
      </div>
    </div>
  );
}
