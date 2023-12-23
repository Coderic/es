import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PermissionInterface } from './permission.interface';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  private endpoint=`${environment.api}/admin/permissions`;

  constructor(private httpSrv: HttpClient) { }
  
  getPermissions(): Observable<PermissionInterface[]> {
    return this.httpSrv.get<PermissionInterface[]>(this.endpoint);
  }

  getPermission(id: number): Observable<PermissionInterface> {
    return this.httpSrv.get<PermissionInterface>(`${this.endpoint}/${id}`);
  }

  createPermission(permission: PermissionInterface): Observable<PermissionInterface> {
    return this.httpSrv.put<PermissionInterface>(this.endpoint, permission);
  }

  updatePermission(permission: PermissionInterface, id: number): Observable<PermissionInterface> {
    return this.httpSrv.patch<PermissionInterface>(`${this.endpoint}/${id}`, permission);
  }

  deletePermission(id: number): Observable<boolean> {
    return this.httpSrv.delete<boolean>(`${this.endpoint}/${id}`);
  }
}
