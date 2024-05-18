import { IPlaylist } from '@/types/IPlaylist';

export interface IPlaylistResponse {
  href: string;
  items: IPlaylist[];
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
}

export interface IPlaylistService {
  getCurrentUserPlaylists(): Promise<IPlaylistResponse | undefined>;
}
