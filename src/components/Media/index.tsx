import classNames from 'classnames';
import { ReactNode } from 'react';
import styles from './Media.module.scss';

export interface IMedia {
  id: string;
  image: string;
  title: string;
  description: string | ReactNode;
  noPadding?: boolean;
  small?: boolean;
}

export function Media({ image, title, description, noPadding, small }: IMedia) {
  const classname = {
    media: classNames(styles.media, {
      [styles['media--no-padding']]: noPadding,
    }),
    media__image: classNames(styles.media__image, { [styles['media__image--small']]: small }),
    media__info: classNames(styles.media__info, { [styles['media__info--small']]: small }),
  };

  return (
    <div className={classname.media}>
      <img className={classname.media__image} src={image} alt={title} />

      <div className={classname.media__info}>
        <p className={styles.media__title}>{title}</p>
        <span className={styles.media__description}>{description}</span>
      </div>
    </div>
  );
}
