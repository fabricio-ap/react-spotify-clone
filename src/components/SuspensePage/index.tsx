import { ReactNode, Suspense } from 'react';

interface ISuspense {
  children: ReactNode;
}

export function SuspensePage({ children }: ISuspense) {
  return <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>;
}
