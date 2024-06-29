'use client';
import { ChangeEventHandler, useState } from 'react';
import { useTranslations } from 'next-intl';

import CommonTextArea from '@/components/common/input/CommonTextArea';
import { BaseButton } from '@/components/common/button/BaseButton';
import { analysisParagraph } from '@/lib/api/ai';
import useParagraph from '@/store/useParagraph';
import { Spinner } from '@nextui-org/spinner';
import { useRouter } from 'next/navigation';

interface ParagraphAnalysis {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export default function ParagraphAnalysis({ value, onChange }: ParagraphAnalysis) {
  const t = useTranslations('paragraph');
  const { setResult } = useParagraph();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onAnalysis = async () => {
    setLoading(true);
    analysisParagraph(value)
      .then((res) => {
        console.log(res);
        setResult(res);
        router.push('/text/paragraph/result');
      })
      .finally(() => setLoading(false));
  };
  return (
    <div>
      <h1 className={'mt-12 font-bold text-lg animate-appear-right'}>{t('title')}</h1>
      <p className={'mt-3 lg:w-1/2 animate-[appear-right_0.8s_ease-out] mb-4'}>
        {t('description')}
      </p>
      <CommonTextArea
        className={'h-[50dvh] animate-appear-bottom'}
        maxLength={3000}
        size={'lg'}
        value={value}
        onChange={onChange}
      />
      <div className={'animate-appear-bottom mt-14 flex justify-center'}>
        {loading ? (
          <Spinner />
        ) : (
          <BaseButton onClick={() => onAnalysis()}>{t('analysis')}</BaseButton>
        )}
      </div>
    </div>
  );
}
