import { IMedia, Icon, Media, Scroll, Skeleton } from '@/components';
import { IPlaylist as IPlaylistItem } from '@/types/IPlaylist';
import { useNavigate } from 'react-router-dom';
import styles from './Playlist.module.scss';

interface IPlaylist {
  playlist: IPlaylistItem[] | undefined;
  isLoading?: boolean;
}

function Loading() {
  return (
    <>
      <Skeleton.Media />
      <Skeleton.Media />
      <Skeleton.Media />
    </>
  );
}

export function Playlist({ playlist = [], isLoading }: IPlaylist) {
  const navigate = useNavigate();

  const mediaArr: IMedia[] = playlist.map((item) => ({
    id: item.id,
    image: item.images[0].url,
    title: item.name,
    description: `Playlist • ${item.owner.display_name}`,
    onClick: () => handleClickPlaylist(item),
  }));

  const handleClickPlaylist = (item: IPlaylistItem) => {
    navigate(`/playlists/${item.id}`);
  };

  return (
    <div className={styles.playlist}>
      <div className={styles.playlist__title}>
        <Icon icon='library' />
        <span>Sua Biblioteca</span>
      </div>

      <Scroll>
        <div className={styles.playlist__list}>
          {isLoading && <Loading />}

          {!isLoading && mediaArr.map((media) => <Media key={media.id} {...media} />)}
        </div>
      </Scroll>
    </div>
  );
}
