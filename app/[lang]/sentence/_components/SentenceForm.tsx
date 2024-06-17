'use client';

import CommonTextInput from '@/components/common/input/CommonTextInput';
import { useState } from 'react';

export default function SentenceForm() {
  const [inputValue, setInputValue] = useState<string>('');
  return <form className={'my-8 animate-appear-bottom'}>
    <CommonTextInput value={inputValue}
                     maxLength={100}
                     onChange={e => setInputValue(e.target.value)}/>
    
  </form>;
}
