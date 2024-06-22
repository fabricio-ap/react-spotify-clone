import { Suspense } from '@/components';
import { RouteObject } from 'react-router-dom';
import { Protected } from './Protected';
import { Pages } from './pages';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Protected />,
    children: [
      {
        path: '/',
        element: (
          <Suspense>
            <Pages.Home />
          </Suspense>
        ),
      },
      {
        path: '/search',
        element: (
          <Suspense>
            <Pages.Search />
          </Suspense>
        ),
      },
      {
        path: '/playlists/:id',
        element: <>Playlist</>,
      },
    ],
  },
  {
    path: '/sign-in',
    element: (
      <Suspense>
        <Pages.SignIn />
      </Suspense>
    ),
  },
];
