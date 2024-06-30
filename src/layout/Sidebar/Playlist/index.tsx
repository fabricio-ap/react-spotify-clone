import { Icon, Media, Scroll, Skeleton } from '@/components';
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

  const mediaArr = playlist.map((item) => ({
    id: item.id,
    image: item.images[0].url,
    title: item.name,
    description: `Playlist • ${item.owner.display_name}`,
    link: `/playlists/${item.id}`,
  }));

  const handleClickPlaylist = (link: string) => {
    navigate(link);
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

          {!isLoading &&
            mediaArr.map((media) => (
              <div
                key={media.id}
                className={styles.playlist__item}
                onClick={() => handleClickPlaylist(media.link)}
              >
                <Media {...media} />
              </div>
            ))}
        </div>
      </Scroll>
    </div>
  );
}
