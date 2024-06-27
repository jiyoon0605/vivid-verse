'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

import { SenseResult } from '@/types';
import { TextButton } from '@/components/common/button/TextButton';
import ChipRadioGroup from '@/components/common/input/ChipRadioGroup';
import { BaseButton } from '@/components/common/button/BaseButton';
import { SENSES } from '@/lib/constant';

interface SentenceCheck {
  sense: SenseResult;
  sentence: string;
}

export default function SentenceCheck({ sense, sentence }: SentenceCheck) {
  const t = useTranslations('');
  const [isSense, setIsSense] = useState<boolean | null>(null);
  const [selectedSense, setSelectedSense] = useState<string>('');
  const isValidValue = !['INIT', 'NOT_SENSE', 'OVER_LIMIT'].includes(sense);
  const [label, setLabel] = useState<string>('');
  const router = useRouter();

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

  const onSubmit = () => {
    if (sentence.length <= 0) {
      toast.error(t('toast.sentenceWar'));

      return;
    }
    router.push(
      `/text/sentence/result?sentence=${sentence}&sense=${selectedSense.toUpperCase() ?? sense}`,
    );
  };

  return (
    <div className={'mt-4 mb-12'}>
      <div className={'max-w-dvw flex items-center'}>
        <p dangerouslySetInnerHTML={{ __html: label }} className={'break-words text-pretty'} />
        {isValidValue && (
          <div className={'whitespace-nowrap'}>
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
          </div>
        )}
      </div>
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
          <BaseButton onClick={onSubmit}>
            {`${t(`sentence.changeSense`, { sense: t(`sense.${selectedSense}`) })}`}
          </BaseButton>
        </div>
      )}
    </div>
  );
}
