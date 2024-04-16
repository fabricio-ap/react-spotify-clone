import { Menu } from './Menu';
import { Playlist } from './Playlist';
import styles from './Sidebar.module.scss';

export function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Menu />
      <Playlist />
    </div>
  );
}
