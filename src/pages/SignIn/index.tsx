import { diContainer } from '@/container';
import { DiTypes } from '@/container/types';
import { AuthContext } from '@/context/AuthContext';
import { ISpotifyService } from '@/services/SpotifyService/types';
import { setLocalStorage } from '@/utils/localStorage';
import { getSignInUrl } from '@/utils/spotifyService';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function SignIn() {
  const { setAccessToken } = useContext(AuthContext);
  const navigate = useNavigate();

  const spotifyService = diContainer.get<ISpotifyService>(DiTypes.SPOTIFY_SERVICE);

  useEffect(() => {
    const token = spotifyService.verifyTokenUrlCallback();

    if (token) {
      setLocalStorage('access_token', token);
      setAccessToken(token);
      navigate('/');
    }
  }, []);

  const signIn = () => {
    window.location.href = getSignInUrl();
  };

  return (
    <div>
      <button onClick={signIn}>SignIn</button>
    </div>
  );
}
