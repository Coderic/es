import { provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, RouterLink, RouterModule, RouterOutlet, provideRouter } from '@angular/router';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { ModulesModule } from './account/modules/modules.module';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { authHttpInterceptorFn, AuthService } from '@auth0/auth0-angular';
import { of } from 'rxjs';

class MockAuthService {
  // Define los métodos y propiedades que necesites para tus pruebas
  loginWithRedirect = jasmine.createSpy('loginWithRedirect');
  logout = jasmine.createSpy('logout');
  user$ = of({});
  isAuthenticated$ = of(true);
}

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [
        AppComponent
    ],
    imports: [
        RouterModule
      ],
    providers: [
      { provide: AuthService, useClass: MockAuthService },
      provideHttpClient(withInterceptors([authHttpInterceptorFn])),
      provideHttpClientTesting(),
      provideRouter([])
    ]
}).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
/*
  it(`should have as title 'FRONTEND_MGM'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('FRONTEND_MGM');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('FRONTEND_MGM app is running!');
  });
  */
});
