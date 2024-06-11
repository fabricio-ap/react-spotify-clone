import { Icon } from '@/components';
import styles from '../SavedTracks.module.scss';

export function DurationColumn() {
  return (
    <div className={styles.table__center}>
      <Icon icon='duration' size={16} />
    </div>
  );
}
