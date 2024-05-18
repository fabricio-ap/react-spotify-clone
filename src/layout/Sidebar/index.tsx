import { diContainer } from '@/container';
import { DiTypes } from '@/container/types';
import { IPlaylistResponse, IPlaylistService } from '@/services/PlaylistService/types';
import { useQuery } from '@tanstack/react-query';
import { Menu } from './Menu';
import { Playlist } from './Playlist';
import styles from './Sidebar.module.scss';

export function Sidebar() {
  const playlistService = diContainer.get<IPlaylistService>(DiTypes.PLAYLIST_SERVICE);

  const {
    data: userPlaylist,
    isLoading,
    isFetching,
  } = useQuery<IPlaylistResponse | undefined>({
    queryKey: ['userPlaylist'],
    queryFn: () => playlistService.getCurrentUserPlaylists(),
  });

  return (
    <div className={styles.sidebar}>
      <Menu />
      <Playlist playlist={userPlaylist?.items} isLoading={isLoading || isFetching} />
    </div>
  );
}
