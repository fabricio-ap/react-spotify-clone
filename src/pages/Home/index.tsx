import { Suspense } from '@/components';
import { diContainer } from '@/container';
import { DiTypes } from '@/container/types';
import { ITrackResponse, ITrackService } from '@/services/TrackService/types';
import { useQuery } from '@tanstack/react-query';
import { lazy } from 'react';
import styles from './Home.module.scss';

const FavoriteArtist = lazy(() => import('./FavoriteArtist'));
const SavedTracks = lazy(() => import('./SavedTracks'));

export default function Home() {
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
        <Suspense>
          <FavoriteArtist />
        </Suspense>
      </div>
      <div className={styles.home__section}>
        <h4 className={styles.home__title}>Músicas Curtidas</h4>
        <Suspense>
          <SavedTracks
            tracks={userSavedTracks?.items}
            isLoading={savedTracksLoading || savedTracksFetching}
          />
        </Suspense>
      </div>
    </div>
  );
}
