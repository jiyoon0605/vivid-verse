'use client';

import Image from 'next/image';
import { Tooltip } from '@nextui-org/tooltip';
import { Button } from '@nextui-org/button';
import toast from 'react-hot-toast';
import { useSearchParams } from 'next/navigation';

import { SenseResult } from '@/types';
import VisionIcon from '@/public/icon/vision.svg';
import HearingIcon from '@/public/icon/hearing.svg';
import SmellIcon from '@/public/icon/smell.svg';
import TasteIcon from '@/public/icon/taste.svg';
import TouchIcon from '@/public/icon/touch.svg';
import CopyIcon from '@/public/icon/copy.svg';
import SwapIcon from '@/public/icon/swap.svg';

interface SentenceBoxProps {
  sense: SenseResult;
  sentence: string;
  canSwap?: boolean;
  isOrigin?: boolean;
}

const iconMap: { [key in string]: string } = {
  VISION: VisionIcon.src,
  HEARING: HearingIcon.src,
  SMELL: SmellIcon.src,
  TASTE: TasteIcon.src,
  TOUCH: TouchIcon.src,
};

export default function SentenceBox({ sense, sentence, isOrigin = false }: SentenceBoxProps) {
  const searchParams = useSearchParams();
  const idx = searchParams.get('idx');
  const onCopy = () => {
    window.navigator.clipboard.writeText(sentence).then(() => {
      toast.success('copy complete');
    });
  };

  const onSwapText = () => {
    const swapChannel = new BroadcastChannel('SWAP_TEXT');

    swapChannel.postMessage({
      sense,
      sentence,
      idx,
    });
  };

  return (
    <div
      className={`
            bg-background-200 py-3 px-6 text-text-200
            rounded-lg border-2 border-background-300
            flex items-center justify-between w-full break-words
            my-3
            `}
    >
      {sentence === 'FAIL' ? (
        <div className={'flex-1 flex gap-4'}>
          <Image alt={sense} height={50} src={iconMap[sense]} width={30} />
          <p className={'text-red-700 font-bold'}>FAIL</p>
        </div>
      ) : (
        <>
          <div className={'flex-1 flex gap-4'}>
            <Image alt={sense} height={50} src={iconMap[sense]} width={30} />
            <p>{sentence}</p>
          </div>
          <div className={'flex items-center ml-5'}>
            <Tooltip content={'copy to clipboard'}>
              <Button className={'bg-transparent min-w-1'} size={'sm'} onClick={onCopy}>
                <Image alt={'copy'} height={30} src={CopyIcon.src} width={30} />
              </Button>
            </Tooltip>
            {!isOrigin && (
              <Button className={'bg-transparent min-w-1'} size={'sm'} onClick={onSwapText}>
                <Image alt={'copy'} height={30} src={SwapIcon.src} width={30} />
              </Button>
            )}
          </div>
        </>
      )}
    </div>
  );
}
