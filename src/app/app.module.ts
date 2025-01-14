import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withInterceptors,
  withInterceptorsFromDi,
} from '@angular/common/http';
import {
  NgModule,
  DEFAULT_CURRENCY_CODE,
  isDevMode,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppInterceptor } from './app.interceptor';
import { LayoutModule } from '@angular/cdk/layout';

import { DashboardComponent } from './account/dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import {
  CommonModule,
  HashLocationStrategy,
  LocationStrategy,
  PathLocationStrategy,
  registerLocaleData,
} from '@angular/common';
import { NotifyComponent } from './utils/notify/notify.component';

import localeEs from '@angular/common/locales/es';
import { UtilsService } from './utils/utils.service';
import { environment as env } from '../environments/environment';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { AuthHttpInterceptor, authHttpInterceptorFn, AuthModule, provideAuth0, AuthClientConfig } from '@auth0/auth0-angular';

registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PageNotFoundComponent,
    NotifyComponent,
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    CommonModule,
    AuthModule,
    BrowserAnimationsModule,
    LayoutModule,
    YouTubePlayerModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    ReactiveFormsModule,
  ],
  providers: [
    UtilsService,
    provideHttpClient(withInterceptors([authHttpInterceptorFn])),
    provideAuth0({
      domain: "auth.coderic.org",
      clientId: "In43D8hfptI5B17Xo7XZX4aBkhfMuH56",
      authorizationParams: {
        redirect_uri: window.location.origin,
      },
      cacheLocation: 'localstorage', // Persistir estado en localStorage
      useRefreshTokens: true, // Usar tokens de actualización
    }),
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'USD' },
    provideHttpClient(withInterceptorsFromDi()),
    provideHttpClientTesting(),
    provideHttpClient(),
  ],
})
export class AppModule {}
