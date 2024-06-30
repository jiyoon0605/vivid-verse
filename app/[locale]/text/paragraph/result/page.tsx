'use client';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import toast from 'react-hot-toast';
import { useRouter, useSearchParams } from 'next/navigation';

import { BaseButton } from '@/components/common/button/BaseButton';
import useParagraph, { ResultType } from '@/store/useParagraph';

export default function Page() {
  const { result, setResult } = useParagraph();
  const text = useRef<ResultType[]>([]);
  const t = useTranslations('common');
  const router = useRouter();
  const searchParams = useSearchParams();
  const sense = searchParams.get('sense');

  useEffect(() => {
    if (!result) {
      router.push('/text/paragraph');

      return;
    }
    text.current = result;

    const swapChannel = new BroadcastChannel('SWAP_TEXT');

    swapChannel.onmessage = ({ data }) => {
      const newResult = (text.current ?? []).map((it, idx) => {
        if (idx == data.idx) {
          return {
            text: data.sentence,
            type: data.sense,
          };
        }

        return it;
      });

      text.current = newResult;
      setResult(newResult);
    };

    return () => swapChannel.close();
  }, [sense]);

  const onCopy = () => {
    const text = result.map((it) => it.text).join(' ');

    window.navigator.clipboard.writeText(text).then(() => {
      toast.success('copy complete');
    });
  };

  return (
    <div className={'lg:w-1/2 p-5 min-h-[50dvh] flex flex-col'}>
      <div className={'flex-1'}>
        {result.map(({ text, type }, idx) =>
          type === 'TEXT' ? (
            <span key={`${idx}-${type}`} className={'p-1'}>
              {text}
            </span>
          ) : (
            <Link
              key={`${idx}-${type}`}
              className={'inline underline underline-offset-2 text-secondary-200 p-1'}
              href={`/text/paragraph/result?sentence=${text}&sense=${type}&idx=${idx}`}
            >
              {text}
            </Link>
          ),
        )}
      </div>
      <div className={'w-full flex justify-center mt-10'}>
        <BaseButton onClick={onCopy}>{t('copy')}</BaseButton>
      </div>
    </div>
  );
}
