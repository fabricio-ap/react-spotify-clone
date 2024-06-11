import { Icon } from '@/components';
import classNames from 'classnames';
import { useState } from 'react';
import styles from '../SavedTracks.module.scss';

export function IndexColumn({ text }: { text: string }) {
  const [canPlay, setCanPlay] = useState(false);

  const classname = classNames(styles.table__center, styles.table__index);

  const handleCanPlay = () => {
    setCanPlay(!canPlay);
  };

  return (
    <div className={classname} onMouseEnter={handleCanPlay} onMouseLeave={handleCanPlay}>
      {!canPlay ? text : <Icon icon='play' size={16} />}
    </div>
  );
}
