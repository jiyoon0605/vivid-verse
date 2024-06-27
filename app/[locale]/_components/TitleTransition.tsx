'use client';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function TitleTransition() {
  const t = useTranslations();
  const [textColor, setTextColor] = useState<string>('#71C4EF');

  const textAnimate = {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <h1
      className={`
                max-sm:text-3xl
                text-6xl
                justify-center
                bg-gradient-to-r from-primary via-violet-500 to-pink-500
                transition bg-clip-text
                duration-300
                delay-100
                ease-out
                tracking-tighter
                flex
                `}
      style={{
        color: textColor,
      }}
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
  );
}
