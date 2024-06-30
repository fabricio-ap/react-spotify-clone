import { Link, Media } from '@/components';
import { IColumnType } from '@/components/Table/types';
import { ITrack } from '@/types/ITrack';
import { formatDateWithFullMonth } from '@/utils/dateConverter';
import { msToMinutes } from '@/utils/timeConverter';
import { Fragment } from 'react/jsx-runtime';
import { ITrackTableItem } from '..';
import { DurationColumn } from './DurationColumn';
import { IndexColumn } from './IndexColumn';

interface IDataSource {
  columns: IColumnType<ITrackTableItem>[];
  dataSource: ITrackTableItem[];
}

export function buildDataSource(
  tracks: ITrack[] = [],
  hoveredTrack: ITrackTableItem | undefined,
): IDataSource {
  const dataSource: ITrackTableItem[] = tracks.map((item, index) => ({
    id: item.track.id,
    index: index + 1,
    title: item.track.name,
    album: item.track.album.name,
    added: formatDateWithFullMonth(item.added_at),
    duration: msToMinutes(item.track.duration_ms),
  }));

  const columns: IColumnType<ITrackTableItem>[] = [
    {
      title: '#',
      dataIndex: 'index',
      width: 40,
      align: 'center',
      render(record) {
        return (
          <IndexColumn
            text={record.index}
            isCurrent={!!hoveredTrack && hoveredTrack.index === record.index}
          />
        );
      },
    },
    {
      title: 'Título',
      dataIndex: 'title',
      render: (record) => {
        const song = tracks.find((item) => item.track.id === record.id);

        if (!song) {
          return <></>;
        }

        const artists = (
          <>
            {song?.track.artists.map((item, index) => {
              if (!song?.track.artists[index + 1]) {
                return (
                  <Link key={item.id} to={`/artist/${item.id}`}>
                    {item.name}
                  </Link>
                );
              }

              return (
                <Fragment key={item.id}>
                  <Link to={`/artist/${item.id}`}>{item.name}</Link>
                  ,&nbsp;
                </Fragment>
              );
            })}
          </>
        );

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
      title: 'Álbum',
      dataIndex: 'album',
      ellipsis: true,
      render: (record) => {
        const album = tracks.find((track) => track.track.id === record.id)?.track.album;

        if (!album) {
          return <></>;
        }

        return <Link to={`/album/${album.id}`}>{album.name}</Link>;
      },
    },
    {
      title: 'Adicionada em',
      dataIndex: 'added',
    },
    {
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
