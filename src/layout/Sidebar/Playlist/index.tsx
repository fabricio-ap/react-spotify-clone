import { Icon } from '@/components';
import styles from './Playlist.module.scss';

export function Playlist() {
  return (
    <div className={styles.playlist}>
      <div className={styles.playlist__title}>
        <Icon icon='library' />
        <span>Sua Biblioteca</span>
      </div>
    </div>
  );
}
