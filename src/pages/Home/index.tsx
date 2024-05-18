import { diContainer } from '@/container';
import { DiTypes } from '@/container/types';
import { ITrackResponse, ITrackService } from '@/services/TrackService/types';
import { useQuery } from '@tanstack/react-query';
import styles from './Home.module.scss';
import { SavedTracks } from './SavedTracks';

export function Home() {
  const trackService = diContainer.get<ITrackService>(DiTypes.TRACK_SERVICE);

  const {
    data: userSavedTracks,
    isLoading: userSavedTracksLoading,
    isFetching: userSavedTracksFetching,
  } = useQuery<ITrackResponse | undefined>({
    queryKey: ['userSavedTracks'],
    queryFn: () => trackService.getCurrentUserSavedTracks(),
  });

  return (
    <div className={styles.home}>
      <SavedTracks
        tracks={userSavedTracks?.items}
        isLoading={userSavedTracksLoading || userSavedTracksFetching}
      />
    </div>
  );
}
