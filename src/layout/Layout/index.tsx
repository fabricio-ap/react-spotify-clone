import { Suspense } from '@/components';
import { ReactNode, lazy } from 'react';
import styles from './Layout.module.scss';

const Sidebar = lazy(() => import('../Sidebar'));
const Main = lazy(() => import('../Main'));
const Player = lazy(() => import('../Player'));

interface ILayout {
  children: ReactNode;
}

export function Layout({ children }: ILayout) {
  return (
    <div className={styles.layout}>
      <Suspense>
        <Sidebar />

        <Main>{children}</Main>

        <Player />
      </Suspense>
    </div>
  );
}
