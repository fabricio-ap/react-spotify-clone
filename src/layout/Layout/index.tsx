import { ReactNode } from 'react';
import styles from './Layout.module.scss';

interface ILayout {
  children: ReactNode;
}

export function Layout({ children }: ILayout) {
  return <div className={styles.layout}>{children}</div>;
}
