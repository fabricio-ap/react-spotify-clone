import { DiTypes } from '@/container/types';
import { inject, injectable } from 'inversify';
import type { IHttpClient } from '../AxiosAdapter/types';
import { ITrackResponse, ITrackService } from './types';

import 'reflect-metadata';

@injectable()
export class TrackService implements ITrackService {
  @inject(DiTypes.HTTP_CLIENT)
  private api!: IHttpClient;

  private savedTracksAbort!: AbortController | null;

  async getCurrentUserSavedTracks() {
    if (this.savedTracksAbort) {
      this.savedTracksAbort.abort();
    }

    this.savedTracksAbort = new AbortController();
    const signal = this.savedTracksAbort.signal;

    const response = await this.api.get<ITrackResponse>({
      url: '/me/tracks',
      config: {
        signal,
      },
    });

    if (response.status !== 200 || !response.data) {
      return;
    }

    return response.data;
  }
}
