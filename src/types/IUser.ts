export interface IUser {
  display_name: string;
  href: string;
  id: string;
  images: {
    url: string;
    height: number;
    width: number;
  }[];
  uri: string;
  followers: {
    total: number;
  };
}
