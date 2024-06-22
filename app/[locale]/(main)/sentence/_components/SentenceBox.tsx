'use client';

import { SenseResult } from '@/types';
import Image from 'next/image';
import { Tooltip } from '@nextui-org/tooltip';

interface SentenceBoxProps {
  sense: SenseResult;
  sentence: string;
}

export default function SentenceBox({ sense, sentence }: SentenceBoxProps) {
  const onCopy = () => {
    navigator.clipboard.writeText(sentence);
  };
  return (
    <div
      className={`
            bg-background-200 py-3 px-6 text-text-200
            rounded-lg border-2 border-background-300
            flex items-center justify-between w-full break-words
            `}
    >
      <div className={'flex-1 flex gap-2'}>
        <Image alt={sense} height={30} src={`icon/${sense.toLowerCase()}.svg`} width={30} />
        <p>{sentence}</p>
      </div>
      <Tooltip className={'ml-5'} content={'copy to clipboard'} onClick={onCopy}>
        <Image alt={'copy'} height={30} src={'icon/copy.svg'} width={30} />
      </Tooltip>
    </div>
  );
}
