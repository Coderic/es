import { NgModule } from '@angular/core';
import { AuthModule } from 'angular-auth-oidc-client';


@NgModule({
    imports: [AuthModule.forRoot({
        config: {
            authority: 'https://auth.coderic.cloud/realms/coderic.org',
            redirectUrl: window.location.origin,
            postLogoutRedirectUri: window.location.origin,
            clientId: 'coderic.org',
            scope: 'openid profile email offline_access',
            responseType: 'code',
            silentRenew: true,
            silentRenewUrl: window.location.origin + '/silent-renew.html',
            renewTimeBeforeTokenExpiresInSeconds: 10,
        }
      })],
    exports: [AuthModule],
})
export class AuthConfigModule {}
