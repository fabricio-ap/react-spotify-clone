import { IHttpClient } from '@/services/AxiosAdapter/types';
import { HttpClient } from '@/services/HttpClient';
import { PlaylistService } from '@/services/PlaylistService';
import { IPlaylistService } from '@/services/PlaylistService/types';
import { SpotifyService } from '@/services/SpotifyService';
import { ISpotifyService } from '@/services/SpotifyService/types';
import { Container } from 'inversify';
import { DiTypes } from './types';

const diContainer = new Container();

// Base
diContainer.bind<IHttpClient>(DiTypes.HTTP_CLIENT).to(HttpClient);

// Services
diContainer.bind<ISpotifyService>(DiTypes.SPOTIFY_SERVICE).to(SpotifyService);
diContainer.bind<IPlaylistService>(DiTypes.PLAYLIST_SERVICE).to(PlaylistService);

export { diContainer };
