'use client';
import { useSearchParams } from 'next/navigation';

import FiveSenseView from '@/app/[locale]/_components/FiveSenseView';

export default function Page() {
  const searchParams = useSearchParams();
  const sentence = searchParams.get('sentence');
  const sense = searchParams.get('sense');

  return <div>{sentence && sense ? <FiveSenseView /> : <div>select extension</div>}</div>;
}
