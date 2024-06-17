'use client';

import CommonTextInput from '@/components/common/input/CommonTextInput';
import { useState } from 'react';
import { BaseButton } from '@/components/common/button/BaseButton';
import { useTranslations } from 'next-intl';


export default function SentenceForm() {
  const [inputValue, setInputValue] = useState<string>('');
  const [isReady, setIsReady] = useState<boolean>(false);
  
  const onAnalysisClick = (sentence: string) => {
    setIsReady(true);
  };
  
  const t = useTranslations('sentence');
  return <form className={'my-8 animate-appear-bottom'}>
    <CommonTextInput value={inputValue}
                     maxLength={100}
                     isLoading={isReady}
                     onChange={e => setInputValue(e.target.value)}/>
    <div className={'my-8'}/>
    <BaseButton label={t('analysis')}
                isLoading={isReady}
                onClick={() => onAnalysisClick(inputValue)}/>
  </form>;
}