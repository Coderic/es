import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileComponent } from './profile.component';
import { of } from 'rxjs';
import { authHttpInterceptorFn, AuthService } from '@auth0/auth0-angular';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';

class MockAuthService {
  // Define los métodos y propiedades que necesites para tus pruebas
  loginWithRedirect = jasmine.createSpy('loginWithRedirect');
  logout = jasmine.createSpy('logout');
  user$ = of({});
  isAuthenticated$ = of(true);
}
describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileComponent],
      providers: [
            { provide: AuthService, useClass: MockAuthService },
            provideHttpClient(withInterceptors([authHttpInterceptorFn])),
            provideHttpClientTesting(),
            provideRouter([])
        ]
    });
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
