'use client';

import CommonTextInput from '@/components/common/input/CommonTextInput';
import { useState } from 'react';
import { BaseButton } from '@/components/common/button/BaseButton';
import { useTranslations } from 'next-intl';
import { getSenseType } from '@/lib/api/ai';
import SentenceCheck from '@/app/[locale]/sentence/_components/SentenceCheck';
import { SenseResult } from '@/types';

export default function SentenceForm() {
  const [inputValue, setInputValue] = useState<string>('');
  const [isReady, setIsReady] = useState<boolean>(false);
  const [sense, setSense] = useState<SenseResult>('INIT');
  const senseLabel = useTranslations('sense');
  const onAnalysisClick = (sentence: string) => {
    setIsReady(true);
    getSenseType(sentence)
      .then((result: SenseResult) => {
        setSense(result);
      })
      .finally(() => {
        setIsReady(false);
      });
  };

  const t = useTranslations('sentence');
  return (
    <form className={'my-8 animate-appear-bottom'}>
      <CommonTextInput
        value={inputValue}
        maxLength={100}
        isLoading={isReady}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <div className={'my-8'} />
      <BaseButton
        label={t('analysis')}
        isLoading={isReady}
        onClick={() => onAnalysisClick(inputValue)}
      />
      <SentenceCheck sense={sense} />
    </form>
  );
}
