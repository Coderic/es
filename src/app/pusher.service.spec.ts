import { TestBed } from '@angular/core/testing';

import { PusherService } from './pusher.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('PusherService', () => {
  let service: PusherService;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
});
    service = TestBed.inject(PusherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
