'use client';

import { FormEvent, useState } from 'react';
import { useTranslations } from 'next-intl';

import CommonTextInput from '@/components/common/input/CommonTextInput';
import { BaseButton } from '@/components/common/button/BaseButton';
import { changeSentence, getSenseType } from '@/lib/api/ai';
import SentenceCheck from '@/app/[locale]/(main)/sentence/_components/SentenceCheck';
import { SenseResult } from '@/types';
import { useRouter } from 'next/navigation';

export default function SentenceForm() {
  const [inputValue, setInputValue] = useState<string>('');
  const [isReady, setIsReady] = useState<boolean>(false);
  const [sense, setSense] = useState<SenseResult>('INIT');
  const router = useRouter();
  const onAnalysisClick = (sentence: string) => {
    setIsReady(true);
    getSenseType(sentence)
      .then((result: SenseResult) => {
        setSense(result.trim() as SenseResult);
      })
      .finally(() => {
        setIsReady(false);
      });
  };

  const t = useTranslations('sentence');

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    router.push(`/sentence/result?sentence=${inputValue}&sense=${sense}`);
  };

  return (
    <form className={'my-8 animate-appear-bottom'} onSubmit={onSubmit}>
      <CommonTextInput
        isLoading={isReady}
        maxLength={100}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <div className={'my-8'} />
      <BaseButton isLoading={isReady} onClick={() => onAnalysisClick(inputValue)}>
        {t('analysis')}
      </BaseButton>
      <SentenceCheck sense={sense} />
    </form>
  );
}
