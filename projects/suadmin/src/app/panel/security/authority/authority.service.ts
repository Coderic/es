import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthorityInterface } from './authority.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthorityService {
  
  private endpoint=`${environment.api}/admin/authorities`;

  constructor(private httpSrv: HttpClient) { }
  
  getAuthorities(): Observable<AuthorityInterface[]> {
    return this.httpSrv.get<AuthorityInterface[]>(this.endpoint);
  }

  getAuthority(id: number): Observable<AuthorityInterface> {
    return this.httpSrv.get<AuthorityInterface>(`${this.endpoint}/${id}`);
  }

  createAuthority(authority: AuthorityInterface): Observable<AuthorityInterface> {
    return this.httpSrv.put<AuthorityInterface>(this.endpoint, authority);
  }

  updateAuthority(authority: AuthorityInterface, id: number): Observable<AuthorityInterface> {
    return this.httpSrv.patch<AuthorityInterface>(`${this.endpoint}/${id}`, authority);
  }

  deleteAuthority(id: number): Observable<boolean> {
    return this.httpSrv.delete<boolean>(`${this.endpoint}/${id}`);
  }
}
