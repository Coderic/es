import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
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
import { AuthService } from './security/auth.service';
import { UtilsService } from './utils/utils.service';
import { UserLoginComponent } from './user-login/user-login.component';
import { environment } from 'src/environments/environment';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { AuthConfigModule } from './auth/auth-config.module';
import { OidcSecurityService, OpenIdConfigLoader, StsConfigLoader } from 'angular-auth-oidc-client';
import { RouterLink, RouterModule } from '@angular/router';

registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PageNotFoundComponent,
    NotifyComponent,
    UserLoginComponent,
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    LayoutModule,
    YouTubePlayerModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    ReactiveFormsModule,
    RouterModule,
    AuthConfigModule,
    OidcSecurityService,
    OpenIdConfigLoader,
  ],
  providers: [
    AuthService,
    UtilsService,
    { provide: LocationStrategy, useClass: PathLocationStrategy },
    //{ provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi: true },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'USD' },
    provideHttpClient(withInterceptorsFromDi()),
    provideHttpClientTesting(),
    provideHttpClient(),
  ],
})
export class AppModule {}
