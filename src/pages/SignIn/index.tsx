import { Button, Logo } from '@/components';
import { diContainer } from '@/container';
import { DiTypes } from '@/container/types';
import { AuthContext } from '@/context/AuthContext';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { ISpotifyService } from '@/services/SpotifyService/types';
import { getSignInUrl } from '@/utils/spotifyService';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SignIn.module.scss';

export function SignIn() {
  const { setAccessToken } = useContext(AuthContext);
  const { set } = useLocalStorage();
  const navigate = useNavigate();

  const spotifyService = diContainer.get<ISpotifyService>(DiTypes.SPOTIFY_SERVICE);

  useEffect(() => {
    const token = spotifyService.verifyTokenUrlCallback();

    if (token) {
      set('access_token', token);
      setAccessToken(token);
      navigate('/');
    }
  }, []);

  const signIn = () => {
    window.location.href = getSignInUrl();
  };

  return (
    <div className={styles['sign-in']}>
      <Logo />
      <Button onClick={signIn}>SignIn</Button>
    </div>
  );
}
