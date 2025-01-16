const { domain, clientId, audience, serverUrl } = {
  "domain": "auth.coderic.org",
  "clientId": "In43D8hfptI5B17Xo7XZX4aBkhfMuH56",
  "audience": "https://api.coderic.net",
  "serverUrl": "http://localhost:6060"
};
export const environment = {
  production: true,
  api: '/api/',
  clientId: 'In43D8hfptI5B17Xo7XZX4aBkhfMuH56',
  authority: 'https://auth.coderic.org',
  auth: {
    domain,
    clientId,
    redirectUri: window.location.origin,
    audience,
  },
  dev: {
    serverUrl,
  },
};
