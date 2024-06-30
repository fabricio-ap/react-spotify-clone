import { Icon } from '@/components';
import classNames from 'classnames';
import styles from '../SavedTracks.module.scss';

interface IIndexColumn {
  text: number;
  isCurrent: boolean;
}

export function IndexColumn({ text, isCurrent }: IIndexColumn) {
  const classname = classNames(styles.table__center, styles.table__index);

  return <div className={classname}>{!isCurrent ? text : <Icon icon='play' size={16} />}</div>;
}
