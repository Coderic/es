import { TestBed } from '@angular/core/testing';

import { SuGuard } from './su.guard';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('SuGuard', () => {
  let guard: SuGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
});
    guard = TestBed.inject(SuGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
