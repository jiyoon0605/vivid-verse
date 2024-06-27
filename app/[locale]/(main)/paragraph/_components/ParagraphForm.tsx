'use client';
import CommonTextArea from '@/components/common/input/CommonTextArea';
import { useState } from 'react';
import ParagraphAnalysis from '@/app/[locale]/(main)/paragraph/_components/ParagraphAnalysis';

export default function ParagraphForm() {
  const [inputValue, setInputValue] = useState<string>('');
  return (
    <div>

      <ParagraphAnalysis value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
    </div>
  );
}
