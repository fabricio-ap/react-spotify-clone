import { Media } from '@/components';
import { ITrack } from '@/types/ITrack';
import { msToMinutes } from '@/utils/timeConverter';
import { ColumnsType } from 'antd/es/table';
import { ITrackTableItem } from '..';
import { DurationColumn } from './DurationColumn';
import { IndexColumn } from './IndexColumn';

interface IDataSource {
  columns: ColumnsType;
  dataSource: ITrackTableItem[];
}

export function buildDataSource(tracks: ITrack[] = []): IDataSource {
  const dataSource: ITrackTableItem[] = tracks.map((item, index) => ({
    key: item.track.id,
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
      render: (text: string) => {
        return <IndexColumn text={text} />;
      },
    },
    {
      key: 'title',
      title: 'Título',
      dataIndex: 'title',
      ellipsis: true,
      render: (_, record) => {
        const song = tracks.find((item) => item.track.id === record.key);

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
      title: <DurationColumn />,
      dataIndex: 'duration',
      align: 'center',
      width: 56,
    },
  ];

  return {
    columns,
    dataSource,
  };
}
