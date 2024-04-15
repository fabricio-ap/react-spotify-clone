import { diContainer } from '@/container';
import { DiTypes } from '@/container/types';
import { ISpotifyService } from '@/services/SpotifyService/types';
import { IUser } from '@/types/IUser';
import { useQuery } from '@tanstack/react-query';

export function useCurrentUser() {
  const spotifyService = diContainer.get<ISpotifyService>(DiTypes.SPOTIFY_SERVICE);

  const { data: user } = useQuery<IUser | undefined>({
    queryKey: ['currentUser'],
    queryFn: () => spotifyService.getCurrentUser(),
  });

  return {
    user,
  };
}
