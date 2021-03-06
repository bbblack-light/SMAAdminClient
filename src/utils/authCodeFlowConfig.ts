import { AuthConfig } from 'angular-oauth2-oidc';

  export const authCodeFlowConfig: AuthConfig = {
    // Url of the Identity Provider
    issuer: 'https://oauth.vk.com/authorize?display=page&v=5.131&clientId=8102211&response_type=code&redirectUri=http://localhost:4200/auth&group_ids=123456,654321',

    // URL of the SPA to redirect the user to after login
    redirectUri: "http://localhost:4200/auth",

    // The SPA's id. The SPA is registerd with this id at the auth-server
    // clientId: 'server.code',
    clientId: '8102211',

    // Just needed if your auth server demands a secret. In general, this
    // is a sign that the auth server is not configured with SPAs in mind
    // and it might not enforce further best practices vital for security
    // such applications.
    // dummyClientSecret: 'secret',

    responseType: 'code',

    // set the scope for the permissions the client should request
    // The first four are defined by OIDC.
    // Important: Request offline_access to get a refresh token
    // The api scope is a usecase specific one
    scope: '',

    showDebugInformation: true,
  };