import { NgModule } from '@angular/core';
import { AuthModule } from 'angular-auth-oidc-client';
import { environment } from 'src/environments/environment';


@NgModule({
    imports: [AuthModule.forRoot({
        config: {
            authority: environment.authority,
            redirectUrl: window.location.origin,
            postLogoutRedirectUri: window.location.origin,
            clientId: environment.clientId,
            scope: 'openid profile email offline_access',
            responseType: 'code',
            silentRenew: true,
            silentRenewUrl: window.location.origin + '/silent-renew.html',
            renewTimeBeforeTokenExpiresInSeconds: 10,
            customParamsAuthRequest:  {
                ui_locales: $localize`en`,
                kc_locale: $localize`en`
            }
        }
      })],
    exports: [AuthModule],
})
export class AuthConfigModule {}
