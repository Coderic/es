import { TestBed } from '@angular/core/testing';

import { FirefunctionsService } from './firefunctions.service';
import { AngularFireModule, FIREBASE_OPTIONS } from '@angular/fire/compat';
import { FirestoreModule, initializeFirestore, provideFirestore } from '@angular/fire/firestore';
import { getApp, initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from 'src/environments/environment';

describe('FirefunctionsService', () => {
  let service: FirefunctionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireModule,
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideFirestore(() => initializeFirestore(getApp(),{}))
      ],
      providers: [
        { provide: FIREBASE_OPTIONS, useValue: environment.firebase },
      ],
    });
    service = TestBed.inject(FirefunctionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
