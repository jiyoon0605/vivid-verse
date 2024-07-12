import React, { ReactNode } from 'react';

import NavTab from '@/components/common/NavTab';

export default async function Layout({ children }: { children: ReactNode }) {
  return (
    <main className={'text-text-100 min-h-dvh max-h-[200dvh]'}>
      <NavTab />
      {children}
    </main>
  );
}
