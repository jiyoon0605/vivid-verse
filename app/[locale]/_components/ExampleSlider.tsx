'use client';
import { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';

import TextExample from '@/app/[locale]/_components/TextExample';

export default function ExampleSlider() {
  const [idx, setIdx] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const t = useTranslations('example');

  const exampleTexts = [
    {
      seqNo: 0,
      prevText: t('example_0.pre'),
      nextText: t('example_0.next'),
    },
    {
      seqNo: 1,
      prevText: t('example_1.pre'),
      nextText: t('example_1.next'),
    },
    {
      seqNo: 2,
      prevText: t('example_2.pre'),
      nextText: t('example_2.next'),
    },
    {
      seqNo: 3,
      prevText: t('example_3.pre'),
      nextText: t('example_3.next'),
    },
    {
      seqNo: 0,
      prevText: t('example_0.pre'),
      nextText: t('example_0.next'),
    },
  ];

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }
    const interval = setInterval(() => {
      setIdx((prevIdx) => {
        const nextIdx = (prevIdx + 1) % exampleTexts.length;

        const target = container.querySelector(`#example_text_${nextIdx}`);

        target?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

        if (nextIdx + 1 >= exampleTexts.length) {
          setTimeout(() => {
            container
              .querySelector(`#example_text_0`)
              ?.scrollIntoView({ behavior: 'auto', block: 'nearest' });
          }, 1000);

          return 0;
        }

        return nextIdx;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [idx]);

  return (
    <div className={'lg:w-2/3 overflow-hidden'}>
      <div ref={containerRef} className={'w-full flex'}>
        {exampleTexts.map(({ seqNo, prevText, nextText }, i) => (
          <div
            key={`${seqNo}_${i}`}
            className={'w-full flex-grow-[1] flex-shrink-0'}
            id={`example_text_${i}`}
          >
            <TextExample inView={seqNo === idx} nextText={nextText} preText={prevText} />
          </div>
        ))}
      </div>
    </div>
  );
}
