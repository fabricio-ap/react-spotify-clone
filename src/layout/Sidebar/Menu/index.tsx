import { Icon } from '@/components';
import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import { IMenu } from '../types';
import styles from './Menu.module.scss';

export function Menu() {
  const { pathname } = useLocation();

  const className = {
    menuLink: (path: string) =>
      classNames(styles.menu__link, { [styles['menu__link--active']]: isActive(path) }),
  };

  const menu: IMenu[] = [
    {
      label: 'Início',
      icon: 'home',
      path: '/',
    },
    {
      label: 'Buscar',
      icon: isActive('/search') ? 'searchActive' : 'search',
      path: '/search',
    },
  ];

  function isActive(path: string) {
    return path === pathname;
  }

  return (
    <ul className={styles.menu}>
      {menu.map(({ label, icon, path }) => (
        <li key={label} className={styles.menu__item}>
          <Link to={path} className={className.menuLink(path)}>
            <Icon icon={icon} />
            <span className={styles.menu__label}>{label}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
