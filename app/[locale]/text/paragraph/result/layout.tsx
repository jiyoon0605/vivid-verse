import { ReactNode } from 'react';

export default function Layout({ children, result }: { children: ReactNode; result: ReactNode }) {
  return (
    <div>
      {children}
      {result}
    </div>
  );
}
