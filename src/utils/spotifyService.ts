import { spotifyConfig } from '@/config/spotify';

export const formatLoginParams = (config: {
  authEndpoint: string;
  clientId: string;
  redirectUrl: string;
  scopes: string[];
}) => ({
  authEndpoint: `${config.authEndpoint}?`,
  clientId: `client_id=${config.clientId}&`,
  redirectUrl: `redirect_uri=${config.redirectUrl}&`,
  scopes: `scope=${config.scopes.join('%20')}&`,
  responseType: `response_type=token&show_dialog=true`,
});

export const getSignInUrl = () => {
  const { authEndpoint, clientId, redirectUrl, scopes, responseType } =
    formatLoginParams(spotifyConfig);

  return authEndpoint + clientId + redirectUrl + scopes + responseType;
};

export function unAuth() {
  localStorage.clear();
  window.location.href = '/sign-in';
}
