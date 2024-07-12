import { ReactNode } from 'react';

export default function Layout({ children, result }: { children: ReactNode; result: ReactNode }) {
  return (
    <div className={'flex max-md:flex-col gap-4 w-full my-10'}>
      {children}
      {result}
    </div>
  );
}
