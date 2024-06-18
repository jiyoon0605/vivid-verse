'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

import { SenseResult } from '@/types';
import { TextButton } from '@/components/common/button/TextButton';
import ChipRadioGroup from '@/components/common/input/ChipRadioGroup';
import { BaseButton } from '@/components/common/button/BaseButton';
import { SENSES } from '@/lib/constant';

interface SentenceCheck {
  sense: SenseResult;
}

export default function SentenceCheck({ sense }: SentenceCheck) {
  const t = useTranslations('');
  const [isSense, setIsSense] = useState<boolean | null>(null);
  const [selectedSense, setSelectedSense] = useState<string>('');
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
            <TextButton
              isSelected={isSense === true}
              onClick={() => {
                setIsSense(true);
                setSelectedSense(sense.toLowerCase().trim());
              }}
            >
              {t('common.yes')}
            </TextButton>
            <TextButton
              isSelected={isSense === false}
              onClick={() => {
                setIsSense(false);
                setSelectedSense('');
              }}
            >
              {t('common.no')}
            </TextButton>
          </div>
          {isSense === false && (
            <div>
              <p>{t('sentence.selectSense')}</p>
              <ChipRadioGroup
                onChange={(e) => {
                  setSelectedSense(e.target.value);
                }}
              >
                {SENSES.map((sense) => (
                  <ChipRadioGroup.Chip key={sense} value={sense}>
                    {t(`sense.${sense}`)}
                  </ChipRadioGroup.Chip>
                ))}
              </ChipRadioGroup>
            </div>
          )}
          {selectedSense && (
            <BaseButton onClick={() => {}}>
              {`${t(`sense.${selectedSense}`)} 를 다른 표현으로 변환`}
            </BaseButton>
          )}
        </>
      )}
    </div>
  );
}
