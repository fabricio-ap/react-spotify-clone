import { Icon } from '../Icon';
import styles from './Logo.module.scss';

export function Logo() {
  return (
    <div className={styles.logo}>
      <Icon icon='spotify' size={40} />
      <span className={styles.logo__label}>My Spotify</span>
    </div>
  );
}
