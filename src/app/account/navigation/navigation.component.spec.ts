import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationComponent } from './navigation.component';
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
describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavigationComponent],
      imports: [],
      providers: [
        { provide: AuthService, useClass: MockAuthService },
        provideHttpClient(withInterceptors([authHttpInterceptorFn])),
        provideHttpClientTesting(),
        provideRouter([])
      ]
    });
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
