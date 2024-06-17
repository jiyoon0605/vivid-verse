'use client';

import { SenseResult } from '@/types';
import { useTranslations } from 'next-intl';

interface SentenceCheck {
  sense: SenseResult;
}

export default function SentenceCheck({ sense }: SentenceCheck) {
  const t = useTranslations('');

  const getLabel = () => {
    const senseKey = `sense.${sense.toLowerCase().trim()}`;
    console.log(senseKey);
    console.log(t(senseKey));
    console.log(t('sense.hearing'));
    console.log(t(`sentence.checkSense`, { sense: t(senseKey) }));
    switch (sense) {
      case 'INIT':
        return '';
      case 'NOT_SENSE':
        return 'NOT_SENSE';
      case 'OVER_LIMIT':
        return 'NOT_SENSE';
      default:
        return t.rich(`sentence.checkSense`, {
          sense: t(`${senseKey}`),
          p: (chunks) => `<p class="inline font-bold text-primary">${chunks}</p>`,
        });
    }
  };

  return (
    <>
      {sense !== 'INIT' && (
        <div>
          <p dangerouslySetInnerHTML={{ __html: getLabel() }} />
        </div>
      )}
    </>
  );
}
