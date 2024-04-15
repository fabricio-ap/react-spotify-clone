import { ReactNode } from 'react';
import styles from './Main.module.scss';

interface IMain {
  children: ReactNode;
}

export function Main({ children }: IMain) {
  return <div className={styles.main}>{children}</div>;
}
