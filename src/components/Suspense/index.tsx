import { ReactNode, Suspense as ReactSuspense } from 'react';

interface ISuspense {
  children: ReactNode;
}

export function Suspense({ children }: ISuspense) {
  return <ReactSuspense fallback={<div>Loading...</div>}>{children}</ReactSuspense>;
}
