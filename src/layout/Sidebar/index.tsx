import { diContainer } from '@/container';
import { DiTypes } from '@/container/types';
import { IPlaylistService } from '@/services/PlaylistService/types';
import { IPlaylist } from '@/types/IPlaylist';
import { useQuery } from '@tanstack/react-query';
import { Menu } from './Menu';
import { Playlist } from './Playlist';
import styles from './Sidebar.module.scss';

export function Sidebar() {
  const playlistService = diContainer.get<IPlaylistService>(DiTypes.PLAYLIST_SERVICE);

  const { data: userPlaylist } = useQuery<IPlaylist | undefined>({
    queryKey: ['userPlaylist'],
    queryFn: () => playlistService.getCurrentUserPlaylists(),
  });

  console.log({ userPlaylist });

  return (
    <div className={styles.sidebar}>
      <Menu />
      <Playlist />
    </div>
  );
}
