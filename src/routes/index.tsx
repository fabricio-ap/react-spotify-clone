import { ReactNode, Suspense, lazy } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Protected } from './Protected';

const Pages = {
  SignIn: lazy(() => import('@/pages/SignIn')),
  Home: lazy(() => import('@/pages/Home')),
  Search: lazy(() => import('@/pages/Search')),
};

const SuspensePage = ({ children }: { children: ReactNode }) => {
  return <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>;
};

export function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Protected />,
      children: [
        {
          path: '/',
          element: (
            <SuspensePage>
              <Pages.Home />
            </SuspensePage>
          ),
        },
        {
          path: '/search',
          element: (
            <SuspensePage>
              <Pages.Search />
            </SuspensePage>
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
        <SuspensePage>
          <Pages.SignIn />
        </SuspensePage>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}
