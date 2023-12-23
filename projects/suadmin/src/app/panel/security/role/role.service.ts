import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RoleInterface } from './role.interface';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  
  private endpoint=`${environment.api}/admin/roles`;

  constructor(private httpSrv: HttpClient) { }
  
  getRoles(): Observable<RoleInterface[]> {
    return this.httpSrv.get<RoleInterface[]>(this.endpoint);
  }

  getRole(id: number): Observable<RoleInterface> {
    return this.httpSrv.get<RoleInterface>(`${this.endpoint}/${id}`);
  }

  createRole(role: RoleInterface): Observable<RoleInterface> {
    return this.httpSrv.put<RoleInterface>(this.endpoint, role);
  }

  updateRole(role: RoleInterface, id: number): Observable<RoleInterface> {
    return this.httpSrv.patch<RoleInterface>(`${this.endpoint}/${id}`, role);
  }

  deleteRole(id: number): Observable<boolean> {
    return this.httpSrv.delete<boolean>(`${this.endpoint}/${id}`);
  }
}
