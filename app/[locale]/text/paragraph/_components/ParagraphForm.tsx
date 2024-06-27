'use client';
import React, { useState } from 'react';
import ParagraphAnalysis from '@/app/[locale]/text/paragraph/_components/ParagraphAnalysis';

export default function ParagraphForm() {
  const [inputValue, setInputValue] = useState<string>('');

  return <ParagraphAnalysis value={inputValue} onChange={(e) => setInputValue(e.target.value)} />;
}
