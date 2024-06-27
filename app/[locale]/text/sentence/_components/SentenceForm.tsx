'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import toast from 'react-hot-toast';

import CommonTextInput from '@/components/common/input/CommonTextInput';
import { BaseButton } from '@/components/common/button/BaseButton';
import { getSenseType } from '@/lib/api/ai';
import { SenseResult } from '@/types';
import SentenceCheck from '@/app/[locale]/text/sentence/_components/SentenceCheck';

export default function SentenceForm() {
  const t = useTranslations('');
  const [inputValue, setInputValue] = useState<string>('');
  const [isReady, setIsReady] = useState<boolean>(false);
  const [sense, setSense] = useState<SenseResult>('INIT');

  const onAnalysisClick = (sentence: string) => {
    if (inputValue.length <= 0) {
      toast.error(t('toast.sentenceWar'));

      return;
    }
    setIsReady(true);
    getSenseType(sentence)
      .then((result: SenseResult) => {
        setSense(result.trim() as SenseResult);
      })
      .finally(() => {
        setIsReady(false);
      });
  };

  return (
    <div className={'my-8 animate-appear-bottom'}>
      <CommonTextInput
        isLoading={isReady}
        maxLength={100}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <div className={'my-8'} />
      <BaseButton isLoading={isReady} onClick={() => onAnalysisClick(inputValue)}>
        {t('sentence.analysis')}
      </BaseButton>
      <SentenceCheck sense={sense} sentence={inputValue} />
    </div>
  );
}
