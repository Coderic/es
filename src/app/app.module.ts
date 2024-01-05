import {
  HttpClientModule,
  HttpClientXsrfModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { NgModule, DEFAULT_CURRENCY_CODE, isDevMode, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
  HashLocationStrategy,
  LocationStrategy,
  PathLocationStrategy,
  registerLocaleData,
} from '@angular/common';
import { NotifyComponent } from './utils/notify/notify.component';

import localeEs from '@angular/common/locales/es';
import { AuthService } from './security/auth.service';
import { UtilsService } from './utils/utils.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { UserLoginComponent } from './user-login/user-login.component';
import { getApp, initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { connectAuthEmulator, getAuth, provideAuth } from '@angular/fire/auth';
import {
  getAnalytics,
  provideAnalytics,
  ScreenTrackingService,
  UserTrackingService,
} from '@angular/fire/analytics';
import {
  initializeAppCheck,
  ReCaptchaEnterpriseProvider,
  provideAppCheck,
} from '@angular/fire/app-check';
import { connectFirestoreEmulator, getFirestore, initializeFirestore, persistentLocalCache, persistentMultipleTabManager, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { connectFunctionsEmulator, getFunctions, provideFunctions } from '@angular/fire/functions';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';
import { getPerformance, providePerformance } from '@angular/fire/performance';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { getRemoteConfig, provideRemoteConfig } from '@angular/fire/remote-config';
import { environment } from 'src/environments/environment';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { AngularFireFunctionsModule, ORIGIN } from '@angular/fire/compat/functions';

registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PageNotFoundComponent,
    NotifyComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    YouTubePlayerModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    ReactiveFormsModule,
    AngularFireFunctionsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),

    provideAnalytics(() => getAnalytics()),
    /*
    provideAppCheck(() => {
      // TODO get a reCAPTCHA Enterprise here https://console.cloud.google.com/security/recaptcha?project=_
      const provider = new ReCaptchaEnterpriseProvider("6LdkfSMpAAAAAICT-GKrRw9sjdeSFBpIkaolqboO");
      return initializeAppCheck(undefined, { provider, isTokenAutoRefreshEnabled: true });
    }),
    */
   provideDatabase(() => getDatabase()),
   provideFirestore(() => {
    const firestore = initializeFirestore(getApp(), {
      localCache: persistentLocalCache({
        tabManager: persistentMultipleTabManager(),
      }),
    });
    if (!environment.production) {
      connectFirestoreEmulator(firestore, "localhost", 8080);
    }
    return firestore;
  }),
   provideAuth(() => {
    const auth = getAuth();
    if (!environment.production) {
      connectAuthEmulator(auth, "http://localhost:9099", {
        disableWarnings: false,
      });
    }
    return auth;
  }),
    provideFunctions(() => {
      const functions = getFunctions();
      //functions.region = "us-central1";
      if (!environment.production) {
        //functions.customDomain = 'coderic-org';
        connectFunctionsEmulator(functions, "localhost", 5001);
      }
      return functions;
    }),
    provideMessaging(() => getMessaging()),
    providePerformance(() => getPerformance()),
    provideStorage(() => getStorage()),
    provideRemoteConfig(() => getRemoteConfig()),
    provideFirebaseApp(() =>
      initializeApp(environment.firebase)
    ),
  ],
  providers: [
    AuthService,
    UtilsService,
    { provide: LocationStrategy, useClass: PathLocationStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi: true },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'USD' },
    { provide: FIREBASE_OPTIONS, useValue: environment.firebase },
    ScreenTrackingService,
    UserTrackingService,
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule {}
