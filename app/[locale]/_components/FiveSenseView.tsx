'use client';

import { useRouter, useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";
import { SenseResult, SentenceConvertResponse } from "@/types";
import { changeSentence, rechangeSentence } from "@/lib/api/ai";
import SentenceBox from "@/app/[locale]/(main)/sentence/_components/SentenceBox";
import { Spinner } from "@nextui-org/spinner";
import { motion } from "framer-motion";
import { BaseButton } from "@/components/common/button/BaseButton";
import Link from "next/link";
import { TextButton } from "@/components/common/button/TextButton";

export default function FiveSenseView() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const t = useTranslations('sentence.result');
  const [response, setResponse] = useState<SentenceConvertResponse>();
  const [result, setResult] = useState<string[][]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [retryCnt, setRetryCnt] = useState<number>(0);
  const sentence = searchParams.get('sentence');
  const sense = searchParams.get('sense');

  useEffect(() => {
    if (!sentence || !sense) {
      router.push('/sentence');
      return;
    }
    changeSentence(sentence, sense as SenseResult)
      .then((res: SentenceConvertResponse) => {
        setResponse(res);
        setResult(Object.entries(res).filter(([key]) => key.toUpperCase() !== sense.toUpperCase()));
      })
      .finally(() => setLoading(false));
  }, []);

  const onReRequest = () => {
    if (!sentence || !sense || !response) {
      return;
    }
    setRetryCnt(retryCnt + 1);
    setLoading(true);
    rechangeSentence(sentence, sense as SenseResult, response)
      .then((res: SentenceConvertResponse) => {
        setResponse(res);
        setResult(Object.entries(res).filter(([key]) => key.toUpperCase() !== sense.toUpperCase()));
      })
      .finally(() => setLoading(false));
  };

  return (
    <div>
      <p className={'text-text-200 font-bold text-xl'}>{t('original')}</p>
      {sense && <SentenceBox sense={sense as SenseResult} sentence={sentence as string} />}
      <p className={'text-text-200 font-bold text-xl mt-10'}>{t('changed')}</p>
      <div>
        {loading ? (
          <div className={'w-full h-[30dvh] flex justify-center items-center'}>
            <Spinner label="LOADING..." size={'lg'} className={'font-bold'} />
          </div>
        ) : (
          <>
            {result.map(([sense, sentence], idx) => (
              <motion.div
                key={`${sense}-${retryCnt}`}
                initial={{
                  y: 50,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.3 * idx,
                }}
              >
                <SentenceBox sense={sense as SenseResult} sentence={sentence} />
              </motion.div>
            ))}
          </>
        )}
      </div>
      <div className={'mt-14 flex justify-center'}>
        <BaseButton size={'lg'} onClick={onReRequest}>
          {t('reRequest')}
        </BaseButton>
      </div>
      <Link href={'/sentence'} className={'mt-8 flex justify-center'}>
        <TextButton onClick={() => {}}>{t('gotoBack')}</TextButton>
      </Link>
    </div>
  );
}
