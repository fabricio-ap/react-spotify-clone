import { ReactNode } from 'react';
import styles from './Scroll.module.scss';

interface IScroll {
  children: ReactNode;
}

export function Scroll({ children }: IScroll) {
  return <div className={styles.scroll}>{children}</div>;
}
