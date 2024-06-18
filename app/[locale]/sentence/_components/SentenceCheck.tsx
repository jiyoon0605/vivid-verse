'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

import { SenseResult } from '@/types';
import { TextButton } from '@/components/common/button/TextButton';

interface SentenceCheck {
  sense: SenseResult;
}

export default function SentenceCheck({ sense }: SentenceCheck) {
  const t = useTranslations('');
  const [isSense, setIsSense] = useState<boolean | null>(null);
  
  const isValidValue = !['INIT', 'NOT_SENSE', 'OVER_LIMIT'].includes(sense);
  const getLabel = () => {
    const senseKey = `sense.${sense.toLowerCase().trim()}`;

    switch (sense) {
      case 'INIT':
        return '';
      case 'NOT_SENSE':
        return t('sentence.notSense');
      case 'OVER_LIMIT':
        return t('sentence.overLimit');
      default:
        return t.rich(`sentence.checkSense`, {
          sense: t(`${senseKey}`),
          p: (chunks) => `<p class="inline font-bold text-primary">${chunks}</p>`,
        });
    }
  };

  return (
    <div>
      <p dangerouslySetInnerHTML={{ __html: getLabel() }} />
      {isValidValue && (
        <>
          <div>
            <TextButton isSelected={isSense === true} onClick={() => setIsSense(true)}>
              {t('common.yes')}
            </TextButton>
            <TextButton isSelected={isSense === false} onClick={() => setIsSense(false)}>
              {t('common.no')}
            </TextButton>
          </div>
          {/*{isSense !== null && (*/}

          {/*)}*/}
        </>
      )}
    </div>
  );
}
