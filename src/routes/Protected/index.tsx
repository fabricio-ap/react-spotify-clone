import { AuthContext } from '@/context/AuthContext';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { Layout } from '@/layout/Layout';
import { unAuth } from '@/utils/spotifyService';
import { useContext, useEffect } from 'react';
import { Outlet as RouterOutlet } from 'react-router-dom';

export function Protected() {
  const { token, setCurrentUser } = useContext(AuthContext);
  const { user, isLoading } = useCurrentUser();

  useEffect(() => {
    if (!token) unAuth();
  });

  useEffect(() => {
    if (user) {
      setCurrentUser(user);
    }
  }, [user, setCurrentUser]);

  if (isLoading) {
    return <>carregando...</>;
  }

  return (
    <Layout>
      <RouterOutlet />
    </Layout>
  );
}
