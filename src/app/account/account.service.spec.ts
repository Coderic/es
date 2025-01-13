import { TestBed } from '@angular/core/testing';

import { AccountService } from './account.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { authHttpInterceptorFn, AuthService } from '@auth0/auth0-angular';
import { provideRouter } from '@angular/router';
import { of } from 'rxjs';

class MockAuthService {
  // Define los métodos y propiedades que necesites para tus pruebas
  loginWithRedirect = jasmine.createSpy('loginWithRedirect');
  logout = jasmine.createSpy('logout');
  user$ = of({});
  isAuthenticated$ = of(true);
}
describe('AccountService', () => {
  let service: AccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [],
    providers: [
          { provide: AuthService, useClass: MockAuthService },
          provideHttpClient(withInterceptors([authHttpInterceptorFn])),
          provideHttpClientTesting(),
          provideRouter([])
        ]
});
    service = TestBed.inject(AccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
