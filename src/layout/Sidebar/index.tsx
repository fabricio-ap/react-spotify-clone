import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import { Icon } from '../../components/Icon';
import styles from './Sidebar.module.scss';
import { IMenu } from './types';

export function Sidebar() {
  const { pathname } = useLocation();

  const className = {
    menu: classNames(styles.sidebar__section, styles.sidebar__menu),
    playlist: classNames(styles.sidebar__section),
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
    <div className={styles.sidebar}>
      <ul className={className.menu}>
        {menu.map(({ label, icon, path }) => (
          <li key={label} className={styles.menu__item}>
            <Link to={path} className={className.menuLink(path)}>
              <Icon icon={icon} />
              <span className={styles.menu__label}>{label}</span>
            </Link>
          </li>
        ))}
      </ul>
      <div className={className.playlist}>lista 2</div>
    </div>
  );
}
