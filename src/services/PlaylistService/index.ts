import { DiTypes } from '@/container/types';
import { IPlaylist } from '@/types/IPlaylist';
import { inject, injectable } from 'inversify';
import type { IHttpClient } from '../AxiosAdapter/types';
import { IPlaylistService } from './types';

import 'reflect-metadata';

@injectable()
export class PlaylistService implements IPlaylistService {
  @inject(DiTypes.HTTP_CLIENT)
  private api!: IHttpClient;

  async getCurrentUserPlaylists() {
    const response = await this.api.get<IPlaylist>({ url: '/me/playlists' });

    if (!response.data) {
      return;
    }

    return response.data;
  }
}
