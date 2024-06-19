'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

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
  const [label, setLabel] = useState<string>('');

  useEffect(() => {
    setIsSense(null);
    setSelectedSense('');
    setLabel(getLabel().toString());
  }, [sense]);
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
    <div className={'mt-4 mb-12'}>
      <span dangerouslySetInnerHTML={{ __html: label }} />
      {isValidValue && (
        <>
          <span className={'mb-8'}>
            <TextButton
              isSelected={isSense === true}
              size={'sm'}
              onClick={() => {
                setIsSense(true);
                setSelectedSense(sense.toLowerCase().trim());
              }}
            >
              {t('common.yes')}
            </TextButton>
            <TextButton
              isSelected={isSense === false}
              size={'sm'}
              onClick={() => {
                setIsSense(false);
                setSelectedSense('');
              }}
            >
              {t('common.no')}
            </TextButton>
          </span>
        </>
      )}
      {(isSense === false || sense === 'NOT_SENSE') && (
        <div className={'my-4'}>
          <p className={'my-2'}>{t('sentence.selectSense')}</p>
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
        <div className={'mt-8'}>
          <BaseButton type={'submit'} onClick={() => {}}>
            {`${t(`sense.${selectedSense}`)} 를 다른 표현으로 변환`}
          </BaseButton>
        </div>
      )}
    </div>
  );
}
