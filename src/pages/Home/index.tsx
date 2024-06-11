import { diContainer } from '@/container';
import { DiTypes } from '@/container/types';
import { ITrackResponse, ITrackService } from '@/services/TrackService/types';
import { useQuery } from '@tanstack/react-query';
import { FavoriteArtist } from './FavoriteArtist';
import styles from './Home.module.scss';
import { SavedTracks } from './SavedTracks';

export function Home() {
  const trackService = diContainer.get<ITrackService>(DiTypes.TRACK_SERVICE);

  const {
    data: userSavedTracks,
    isLoading: savedTracksLoading,
    isFetching: savedTracksFetching,
  } = useQuery<ITrackResponse | undefined>({
    queryKey: ['userSavedTracks'],
    queryFn: () => trackService.getCurrentUserSavedTracks(),
  });

  return (
    <div className={styles.home}>
      <div className={styles.home__section}>
        <h4 className={styles.home__title}>Artista Favorito</h4>
        <FavoriteArtist />
      </div>
      <div className={styles.home__section}>
        <h4 className={styles.home__title}>Músicas Curtidas</h4>
        <SavedTracks
          tracks={userSavedTracks?.items}
          isLoading={savedTracksLoading || savedTracksFetching}
        />
      </div>
    </div>
  );
}
