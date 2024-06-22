'use client';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

import ExampleSlider from '@/app/[locale]/_components/ExampleSlider';
import { BaseButton } from '@/components/common/button/BaseButton';

export default function MainSection() {
  const t = useTranslations();
  const [textColor, setTextColor] = useState<string>('primary-100');

  const textAnimate = {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section color={'pt-10'}>
      <div
        className={`
            w-full h-[calc(100dvh-64px)] 
            pt-16
            overflow-hidden
            flex flex-col items-center justify-center
            cursor-default
      `}
      >
        <div className={'mb-12 inline font-extrabold text-center'}>
          <h1
            className={`
                max-sm:text-3xl
                text-6xl
                justify-center
                bg-gradient-to-r from-primary via-violet-500 to-pink-500
                text-${textColor} bg-clip-text
                transition 
                duration-300
                delay-100
                ease-out
                tracking-tighter
                flex
                `}
          >
            <motion.p
              {...textAnimate}
              transition={{
                duration: 0.5,
                ease: 'easeIn',
              }}
            >
              V
            </motion.p>
            <motion.p
              {...textAnimate}
              transition={{
                duration: 0.5,
                ease: 'easeIn',
                delay: 0.2,
              }}
            >
              I
            </motion.p>
            <motion.p
              {...textAnimate}
              transition={{
                duration: 0.8,
                ease: 'easeIn',
              }}
            >
              V
            </motion.p>
            <motion.p
              {...textAnimate}
              transition={{
                duration: 0.5,
                ease: 'easeIn',
                delay: 0.2,
              }}
            >
              I
            </motion.p>
            <motion.p
              {...textAnimate}
              transition={{
                duration: 1,
                ease: 'easeIn',
              }}
            >
              D
            </motion.p>
            <div className={'w-2'} />
            <motion.p
              {...textAnimate}
              transition={{
                duration: 0.8,
                ease: 'easeIn',
              }}
            >
              V
            </motion.p>
            <motion.p
              {...textAnimate}
              transition={{
                duration: 0.5,
                ease: 'easeIn',
                delay: 0.5,
              }}
              onAnimationComplete={() => {
                setTextColor('transparent');
              }}
            >
              E
            </motion.p>
            <motion.p
              {...textAnimate}
              transition={{
                duration: 0.4,
                ease: 'easeIn',
                delay: 0.2,
              }}
            >
              R
            </motion.p>
            <motion.p
              {...textAnimate}
              transition={{
                duration: 0.6,
                ease: 'easeIn',
                delay: 0.3,
              }}
            >
              S
            </motion.p>
            <motion.p
              {...textAnimate}
              transition={{
                duration: 0.2,
                ease: 'easeIn',
                delay: 0.5,
              }}
            >
              E
            </motion.p>
          </h1>
          <h2
            dangerouslySetInnerHTML={{ __html: t.rich('main.slogan') }}
            className={'max-sm:text-lg text-4xl text-primary-200 mt-8 mb-12'}
          />
        </div>
        <ExampleSlider />
        <Link className={'mt-14'} href={'/sentence'}>
          <BaseButton size={'lg'} onClick={() => {}}>
            바로 시작하기
          </BaseButton>
        </Link>
      </div>
    </section>
  );
}
