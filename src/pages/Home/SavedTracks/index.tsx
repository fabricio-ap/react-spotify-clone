import { Table } from '@/components';
import { ITrack } from '@/types/ITrack';
import { useState } from 'react';
import { buildDataSource } from './DataSource';
import styles from './SavedTracks.module.scss';

export interface ITrackTableItem {
  id: string;
  index: number;
  title: string;
  album: string;
  added: string;
  duration: string;
}

interface ISavedTracks {
  tracks?: ITrack[];
  isLoading: boolean;
}

export default function SavedTracks({ tracks = [], isLoading }: ISavedTracks) {
  const [hoveredTrack, setHoveredTrack] = useState<ITrackTableItem | undefined>();

  const { columns, dataSource } = buildDataSource(tracks, hoveredTrack);

  function onHover(record?: ITrackTableItem) {
    setHoveredTrack(record);
  }

  if (isLoading) {
    return <>Carregando...</>;
  }

  return (
    <div className={styles.table}>
      <Table column={columns} dataSource={dataSource} onHover={onHover} onHoverOut={onHover} />
    </div>
  );
}
