'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react';
import { Spinner } from '@nextui-org/spinner';
import { motion } from 'framer-motion';
import Link from 'next/link';

import { SenseResult, SentenceConvertResponse } from '@/types';
import { changeSentence, rechangeSentence } from '@/lib/api/ai';
import { BaseButton } from '@/components/common/button/BaseButton';
import { TextButton } from '@/components/common/button/TextButton';
import SentenceBox from '@/app/[locale]/text/sentence/_components/SentenceBox';

interface FiveSenseViewProps {
  paragraphConvertor?: boolean;
}

export default function FiveSenseView({ paragraphConvertor = false }: FiveSenseViewProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const t = useTranslations('sentence.result');
  const [response, setResponse] = useState<SentenceConvertResponse>();
  const [result, setResult] = useState<string[][]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [retryCnt, setRetryCnt] = useState<number>(0);
  const sentence = searchParams.get('sentence');
  const sense = searchParams.get('sense');

  useEffect(() => {
    if (!sentence || !sense) {
      router.push('/text/sentence');

      return;
    }
    setLoading(true);

    changeSentence(sentence, sense as SenseResult)
      .then((res: SentenceConvertResponse) => {
        setResponse(res);
        setResult(Object.entries(res).filter(([key]) => key.toUpperCase() !== sense.toUpperCase()));
      })
      .finally(() => setLoading(false));
  }, [sentence, sense]);

  const onReRequest = () => {
    if (!sentence || !sense || !response) {
      return;
    }
    setRetryCnt(retryCnt + 1);
    setLoading(true);
    rechangeSentence(sentence, sense as SenseResult, response)
      .then((res: SentenceConvertResponse) => {
        console.log(res);
        setResponse(res);
        setResult(Object.entries(res).filter(([key]) => key.toUpperCase() !== sense.toUpperCase()));
      })
      .finally(() => setLoading(false));
  };

  return (
    <div>
      <p className={'text-text-200 font-bold text-xl'}>{t('original')}</p>
      {sense && <SentenceBox sense={sense as SenseResult} sentence={sentence as string} />}
      <p className={'text-text-200 font-bold text-xl mt-10'}>{t('changed')}</p>
      <div>
        {loading ? (
          <div className={'w-full h-[30dvh] flex justify-center items-center'}>
            <Spinner className={'font-bold'} label="LOADING..." size={'lg'} />
          </div>
        ) : (
          <>
            {result.map(([sense, sentence], idx) => (
              <motion.div
                key={`${sense}-${retryCnt}`}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                initial={{
                  y: 50,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.3 * idx,
                }}
              >
                <SentenceBox sense={sense as SenseResult} sentence={sentence} />
              </motion.div>
            ))}
          </>
        )}
      </div>
      {!loading && (
        <div className={'mt-14 flex justify-center'}>
          <BaseButton size={'lg'} onClick={onReRequest}>
            {t('reRequest')}
          </BaseButton>
        </div>
      )}
      {!paragraphConvertor &&
        <Link className={'mt-8 flex justify-center'} href={'/text/sentence'}>
          <TextButton onClick={() => {}}>{t('gotoBack')}</TextButton>
        </Link>
      }
    </div>
  );
}
