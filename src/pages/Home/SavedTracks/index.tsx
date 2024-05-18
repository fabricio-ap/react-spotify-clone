import { Icon, Media, Table } from '@/components';
import { ITrack } from '@/types/ITrack';
import { msToMinutes } from '@/utils/timeConverter';
import { ColumnsType } from 'antd/es/table';
import styles from './SavedTracks.module.scss';

interface ITrackTableItem {
  id: string;
  index: number;
  title: string;
  duration: string;
  album: string;
}

interface ISavedTracks {
  tracks: ITrack[] | undefined;
  isLoading: boolean;
}

function TableDurationColumns() {
  return (
    <div className={styles.table__duration}>
      <Icon icon='duration' size={16} />
    </div>
  );
}

export function SavedTracks({ tracks = [], isLoading }: ISavedTracks) {
  const dataSource: ITrackTableItem[] = tracks.map((item, index) => ({
    id: item.track.id,
    index: index + 1,
    title: item.track.name,
    duration: msToMinutes(item.track.duration_ms),
    album: item.track.album.name,
  }));

  const columns: ColumnsType<ITrackTableItem> = [
    {
      key: 'index',
      title: '#',
      dataIndex: 'index',
      width: 40,
      align: 'center',
    },
    {
      key: 'title',
      title: 'Título',
      dataIndex: 'title',
      ellipsis: true,
      render: (_, record) => {
        const song = tracks.find((item) => item.track.id === record.id);

        if (!song) {
          return <></>;
        }

        const artists = song?.track.artists.map((item) => item.name).join(', ');

        return (
          <Media
            id={song.track.id}
            title={song?.track.name}
            description={artists}
            image={song?.track.album.images[0].url}
            noPadding
            small
          />
        );
      },
    },
    {
      key: 'album',
      title: 'Álbum',
      dataIndex: 'album',
      ellipsis: true,
    },
    {
      key: 'duration',
      title: <TableDurationColumns />,
      dataIndex: 'duration',
      align: 'center',
      width: 56,
    },
  ];

  if (isLoading) {
    return <>Carregando...</>;
  }

  return (
    <div className={styles.table}>
      <Table column={columns} dataSource={dataSource} />
    </div>
  );
}
