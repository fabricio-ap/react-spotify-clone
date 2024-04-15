import { DiTypes } from '@/container/types';
import { IUser } from '@/types/IUser';
import { inject, injectable } from 'inversify';
import type { IHttpClient } from '../AxiosAdapter/types';
import { ISpotifyService } from './types';

import 'reflect-metadata';

@injectable()
export class SpotifyService implements ISpotifyService {
  @inject(DiTypes.HTTP_CLIENT)
  private api!: IHttpClient;

  verifyTokenUrlCallback(): string {
    if (!window.location.hash) return '';

    const params = window.location.hash.substring(1).split('&');

    return params[0].split('=')[1];
  }

  async getCurrentUser(): Promise<IUser | undefined> {
    const response = await this.api.get<IUser>({ url: '/me' });

    if (!response.data) {
      return;
    }

    return response.data;
  }
}
