export const spotifyConfig = {
  clientId: import.meta.env.VITE_CLIENT_ID,
  authEndpoint: import.meta.env.VITE_AUTH_ENDPOINT,
  redirectUrl: import.meta.env.VITE_REDIRECT_URL,
  scopes: [
    'user-read-currently-playing', // musica tocando agora.
    'user-read-recently-played', // ler musicas tocadas recentemente
    'user-read-playback-state', // ler estado do player do usuario
    'user-top-read', // top artistas e musicas do usuario
    'user-modify-playback-state', // alterar do player do usuario.
    'user-library-read', // ler biblioteca dos usuarios
    'playlist-read-private', // ler playlists privads
    'playlist-read-collaborative', // ler playlists colaborativas
  ],
};
