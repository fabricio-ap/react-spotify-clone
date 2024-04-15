import { IUser } from '@/types/IUser';

export interface ISpotifyService {
  verifyTokenUrlCallback(): string;
  getCurrentUser(): Promise<IUser | undefined>;
}
