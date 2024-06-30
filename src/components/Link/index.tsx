import { ReactNode } from 'react';
import { LinkProps, Link as RouterLink } from 'react-router-dom';
import styles from './Link.module.scss';

interface ILink extends LinkProps {
  children: ReactNode;
}

export function Link({ children, ...props }: ILink) {
  return (
    <RouterLink className={styles.link} {...props}>
      {children}
    </RouterLink>
  );
}
