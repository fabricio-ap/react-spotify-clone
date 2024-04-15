import { Home, Search, SignIn } from '@/pages';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Protected } from './Protected';

export function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Protected />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/search',
          element: <Search />,
        },
      ],
    },
    {
      path: '/sign-in',
      element: <SignIn />,
    },
  ]);

  return <RouterProvider router={router} />;
}
