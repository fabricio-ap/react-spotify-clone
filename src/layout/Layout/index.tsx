import { ReactNode } from 'react';
import { Main } from '../Main';
import { Player } from '../Player';
import { Sidebar } from '../Sidebar';
import styles from './Layout.module.scss';

interface ILayout {
  children: ReactNode;
}

export function Layout({ children }: ILayout) {
  return (
    <div className={styles.layout}>
      <Sidebar />

      <Main>{children}</Main>

      <Player />
    </div>
  );
}
