import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '@auth0/auth0-angular';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    standalone: false
})
export class AppComponent implements OnInit {
  public categories$: Observable<any[]>;
  public user: any;

  constructor(public auth: AuthService) {}

  ngOnInit(): void {  }

  login(): void {
    //this.oidcSecurityService.authorize();
    this.auth.loginWithRedirect();
  }
  logout(): void {
    this.auth.logout({ logoutParams: { returnTo: document.location.origin } });
  }
}
