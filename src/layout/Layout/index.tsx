import { Header } from '@/components';
import { AuthContext } from '@/context';
import { unAuth } from '@/utils/spotifyService';
import { ReactNode, useContext } from 'react';
import { Main } from '../Main';
import { Player } from '../Player';
import { Sidebar } from '../Sidebar';
import styles from './Layout.module.scss';

interface ILayout {
  children: ReactNode;
}

export function Layout({ children }: ILayout) {
  const { user } = useContext(AuthContext);

  const handleSignOut = () => {
    unAuth();
  };

  return (
    <div className={styles.layout}>
      <Sidebar />

      <Main>
        {user && <Header profile={user} onSignOut={handleSignOut} />}
        {children}
      </Main>

      <Player />
    </div>
  );
}
