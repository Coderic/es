import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { lastValueFrom, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  protected urlOAuthAutentication: string = `${environment.api}/api/auth/token`;
  protected jwtPayload: any;
  public token: string | null = null;
  constructor(
    private router: Router,
    private http: HttpClient,
  ) { }

  authenticate(username: string | null, password: string | null) {
    return this.http.post<any>(`${environment.api}/auth/login`, 
    { username: username, password: password })
    .subscribe((data) => {
      console.log(data.bearer)
      this.storeToken(data.bearer)
      this.router.navigate(['/']);
    });
  }

  checkUserExist(username: string): Observable<Boolean> {
    return this.http.post<boolean>(`${environment.api}/auth/checkUser`, {
      username: username
    });
  }

  async logout(): Promise<void> {
    await lastValueFrom(this.http.get<any>(`${environment.api}/auth/logout`));
  }

  async isAuthenticated(): Promise<boolean> {
    this.http.post<boolean>(`${environment.api}/auth/user`, {});
    const username: string = this.getPayload()?.sub;
    return (username != null)
  }

  getPayload(): any {
    return this.jwtPayload;
  }

  getScope(): any {
    return this.jwtPayload?.scope;
  }
  
  checkGrant(role: string): any {
    this.jwtPayload = localStorage.getItem('jwtPayload');
    console.dir(this.jwtPayload?.scope)
    if(typeof this.jwtPayload?.scope === 'undefined') {
      return false;
    }
    
    let scope: string[] = this.jwtPayload?.scope.split(" ");
    let x = scope.find((grant) => grant == role)
    if (typeof x === 'undefined') {

    }
    console.dir(x)
    return true;
  }

  checkToken(): boolean {
    let token = localStorage.getItem('access_token');
    if(token == null) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }

  async refreshToken(): Promise<void> {
    let data = await lastValueFrom(this.http.post<any>(`${environment.api}/auth/token`, {}));
    console.dir(data.bearer);
    await this.storeToken(data.bearer);
  }

  private storeToken(token: string) {
    this.token = token;
    this.jwtPayload = helper.decodeToken(token);
    localStorage.setItem('jwtPayload', this.jwtPayload);
    localStorage.setItem('access_token', token);
  }
}