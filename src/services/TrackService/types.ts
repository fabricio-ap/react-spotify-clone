import { ITrack } from '@/types/ITrack';

export interface ITrackResponse {
  href: string;
  items: ITrack[];
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
}

export interface ITrackService {
  getCurrentUserSavedTracks(): Promise<ITrackResponse | undefined>;
}
