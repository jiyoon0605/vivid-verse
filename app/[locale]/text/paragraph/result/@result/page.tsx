'use client';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import FiveSenseView from '@/app/[locale]/_components/FiveSenseView';

export default function Page() {
  const [hasSelected, setHasSelected] = useState<boolean>(false);
  const searchParams = useSearchParams();
  const sentence = searchParams.get('sentence');
  const sense = searchParams.get('sense');

  useEffect(() => {
    setHasSelected(sentence !== null && sense !== null);
  }, [sense, sentence]);

  return (
    <div className={'lg:w-1/2 w-full h-full lg:h-full '}>
      {hasSelected ? (
        <FiveSenseView paragraphConvertor={true} />
      ) : (
        <div className={'flex justify-center items-center'}>
          <h1 className={'text-xl font-bold text-background-300'}>SELECT EXTENSION</h1>
        </div>
      )}
    </div>
  );
}
