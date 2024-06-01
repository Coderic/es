import { Component, OnInit, inject } from '@angular/core';

import { Observable } from 'rxjs';

import { LoginResponse, OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
  public categories$: Observable<any[]>;
  private readonly oidcSecurityService = inject(OidcSecurityService);
  public user: any;

  ngOnInit(): void {
    this.oidcSecurityService
      .checkAuth()
      .subscribe((loginResponse: LoginResponse) => {
        const {
          idToken,
          accessToken,
          userData,
          isAuthenticated,
          configId,
          errorMessage,
        } = loginResponse;
        this.user = userData;
        console.dir(loginResponse);
      });
  }

  login(): void {
    console.log('Click login');
    this.oidcSecurityService.authorize();
  }
  logout(): void {
    this.oidcSecurityService
      .logoff()
      .subscribe((result: any) => console.dir(result));
  }
}
