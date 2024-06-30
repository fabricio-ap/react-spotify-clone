import { DiTypes } from '@/container/types';
import { inject, injectable } from 'inversify';
import type { IHttpClient } from '../../plugin/AxiosAdapter/types';
import { IPlaylistResponse, IPlaylistService } from './types';

import 'reflect-metadata';

@injectable()
export class PlaylistService implements IPlaylistService {
  @inject(DiTypes.HTTP_CLIENT)
  private api!: IHttpClient;

  async getCurrentUserPlaylists() {
    const response = await this.api.get<IPlaylistResponse>({ url: '/me/playlists' });

    if (response.status !== 200 || !response.data) {
      return;
    }

    return response.data;
  }
}
