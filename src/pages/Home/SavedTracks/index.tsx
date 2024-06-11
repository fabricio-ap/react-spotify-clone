import { Table } from '@/components';
import { ITrack } from '@/types/ITrack';
import { buildDataSource } from './DataSource';
import styles from './SavedTracks.module.scss';

export interface ITrackTableItem {
  key: string;
  index: number;
  title: string;
  duration: string;
  album: string;
}

interface ISavedTracks {
  tracks?: ITrack[];
  isLoading: boolean;
}

export function SavedTracks({ tracks = [], isLoading }: ISavedTracks) {
  const { columns, dataSource } = buildDataSource(tracks);

  if (isLoading) {
    return <>Carregando...</>;
  }

  return (
    <div className={styles.table}>
      <Table
        column={columns}
        dataSource={dataSource}
        onRow={(record, rowIndex) => {
          return {
            onMouseEnter: () => {
              return record;
            },
            onMouseLeave: () => {
              return rowIndex;
            },
          };
        }}
      />
    </div>
  );
}
