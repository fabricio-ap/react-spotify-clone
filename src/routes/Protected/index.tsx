import { AuthContext } from '@/context/AuthContext';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { Layout, Main, Sidebar } from '@/layout';
import { unAuth } from '@/utils/spotifyService';
import { useContext, useEffect } from 'react';
import { Outlet as RouterOutlet } from 'react-router-dom';

export function Protected() {
  const { token, setCurrentUser } = useContext(AuthContext);
  const { user } = useCurrentUser();

  useEffect(() => {
    if (!token) unAuth();

    if (user) {
      setCurrentUser(user);
    }
  }, []);

  return (
    <Layout>
      <Sidebar />

      <Main>
        <RouterOutlet />
      </Main>
    </Layout>
  );
}
