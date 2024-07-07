'use client';

import React from 'react';

import LanguageSelector from '@/components/common/LanguageSelector';

export default function Footer() {
  return (
    <footer className={'w-dvh bg-background-300 flex max-sm:flex-col'}>
      <div />
      <LanguageSelector />
    </footer>
  );
}
