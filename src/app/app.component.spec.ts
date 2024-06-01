import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, RouterLink, RouterModule, RouterOutlet, provideRouter } from '@angular/router';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { OidcSecurityService, StsConfigLoader } from 'angular-auth-oidc-client';
import { ModulesModule } from './account/modules/modules.module';
import { provideHttpClientTesting } from '@angular/common/http/testing';

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
      OidcSecurityService,
      StsConfigLoader,
      provideHttpClient(withInterceptorsFromDi()),
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
