import { lazy } from 'react';

export const Pages = {
  SignIn: lazy(() => import('@/pages/SignIn')),
  Home: lazy(() => import('@/pages/Home')),
  Search: lazy(() => import('@/pages/Search')),
};
