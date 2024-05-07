import { IPlaylist } from '@/types/IPlaylist';

export interface IPlaylistService {
  getCurrentUserPlaylists(): Promise<IPlaylist | undefined>;
}
