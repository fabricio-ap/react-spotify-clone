import { IHttpClient } from '@/services/AxiosAdapter/types';
import { HttpClient } from '@/services/HttpClient';
import { SpotifyService } from '@/services/SpotifyService';
import { ISpotifyService } from '@/services/SpotifyService/types';
import { Container } from 'inversify';
import { DiTypes } from './types';

const diContainer = new Container();

diContainer.bind<IHttpClient>(DiTypes.HTTP_CLIENT).to(HttpClient);
diContainer.bind<ISpotifyService>(DiTypes.SPOTIFY_SERVICE).to(SpotifyService);

export { diContainer };
