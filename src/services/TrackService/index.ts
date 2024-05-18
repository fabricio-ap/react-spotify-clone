import { DiTypes } from '@/container/types';
import { inject, injectable } from 'inversify';
import type { IHttpClient } from '../AxiosAdapter/types';
import { ITrackResponse, ITrackService } from './types';

import 'reflect-metadata';

@injectable()
export class TrackService implements ITrackService {
  @inject(DiTypes.HTTP_CLIENT)
  private api!: IHttpClient;

  async getCurrentUserSavedTracks() {
    const response = await this.api.get<ITrackResponse>({ url: '/me/tracks' });

    if (response.status !== 200 || !response.data) {
      return;
    }

    return response.data;
  }
}
