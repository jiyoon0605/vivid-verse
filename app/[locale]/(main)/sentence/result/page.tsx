'use client';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { changeSentence } from '@/lib/api/ai';
import { SenseResult } from '@/types';

export default function Page() {
  const searchParams = useSearchParams();

  const sentence = searchParams.get('sentence');
  const sense = searchParams.get('sense');

  useEffect(() => {
    if (!sentence || !sense) {
      return;
    }
    changeSentence(sentence, sense as SenseResult).then((res) => {
      console.log(res);
    });
  }, []);
  return (
    <div>
      {sentence}
      {sense}
    </div>
  );
}
