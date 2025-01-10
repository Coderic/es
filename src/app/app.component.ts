import { Component, OnInit, inject } from '@angular/core';

import { Observable } from 'rxjs';

import { LoginResponse, OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    standalone: false
})
export class AppComponent implements OnInit {
  public categories$: Observable<any[]>;
  private readonly oidcSecurityService = inject(OidcSecurityService);
  public user: any;

  ngOnInit(): void {
    this.oidcSecurityService
      .checkAuth()
      .subscribe(
        (loginResponse: LoginResponse) => (this.user = loginResponse.userData)
      );
  }

  login(): void {
    this.oidcSecurityService.authorize();
  }
  logout(): void {
    this.oidcSecurityService
      .logoff()
      .subscribe((result: any) => console.dir(result));
  }
}
