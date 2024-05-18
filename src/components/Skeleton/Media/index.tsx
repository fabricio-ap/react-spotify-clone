import { tokens } from '@/theme/tokens';
import { Skeleton } from 'antd';
import { CSSProperties } from 'react';
import styles from './Media.module.scss';

export function Media() {
  const imageStyle: CSSProperties = {
    height: '48px',
    width: '48px',
    minWidth: 0,
    background: tokens.backgroundSkeleton,
  };

  const titleStyle: CSSProperties = {
    height: '16px',
    background: tokens.backgroundSkeleton,
  };

  const descriptionStyle: CSSProperties = {
    height: '14px',
    background: tokens.backgroundSkeleton,
  };

  return (
    <div className={styles.skeleton}>
      <Skeleton.Button style={imageStyle} />

      <div className={styles.skeleton__body}>
        <Skeleton.Button style={titleStyle} />
        <Skeleton.Button style={descriptionStyle} block />
      </div>
    </div>
  );
}
