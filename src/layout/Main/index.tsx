import { Header, Scroll } from '@/components';
import { AuthContext } from '@/context';
import { unAuth } from '@/utils/spotifyService';
import { ReactNode, useContext } from 'react';
import styles from './Main.module.scss';

interface IMain {
  children: ReactNode;
}

export default function Main({ children }: IMain) {
  const { user } = useContext(AuthContext);

  const handleSignOut = () => {
    unAuth();
  };

  return (
    <div className={styles.main}>
      {user && <Header profile={user} onSignOut={handleSignOut} />}

      <div className={styles.main__wrapper}>
        <Scroll>
          <div className={styles.main__content}>{children}</div>
        </Scroll>
      </div>
    </div>
  );
}
