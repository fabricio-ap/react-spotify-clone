import { ReactNode } from 'react';
import styles from './Button.module.scss';

interface IButton {
  children: ReactNode;
  onClick: () => void;
}

export function Button({ children, onClick, ...props }: IButton) {
  return (
    <button className={styles.button} onClick={onClick} {...props}>
      <span className={styles.button__label}>{children}</span>
    </button>
  );
}
