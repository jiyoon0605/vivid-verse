'use client';
import useParagraph from '@/store/useParagraph';

export default function Page() {
  const { result, setResult } = useParagraph();

  return <div>{JSON.stringify(result)}</div>;
}
