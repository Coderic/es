import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GroupInterface } from './group.interface';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  
  private endpoint=`${environment.api}/admin/groups`

  constructor(private httpSrv: HttpClient) { }
  
  getGroups(): Observable<GroupInterface[]> {
    return this.httpSrv.get<GroupInterface[]>(this.endpoint);
  }

  getGroup(id: number): Observable<GroupInterface> {
    return this.httpSrv.get<GroupInterface>(`${this.endpoint}/${id}`);
  }

  createGroup(group: GroupInterface): Observable<GroupInterface> {
    return this.httpSrv.put<GroupInterface>(this.endpoint, group);
  }

  updateGroup(group: GroupInterface, id: number): Observable<GroupInterface> {
    return this.httpSrv.patch<GroupInterface>(`${this.endpoint}/${id}`, group);
  }

  deleteGroup(id: number): Observable<boolean> {
    return this.httpSrv.delete<boolean>(`${this.endpoint}/${id}`);
  }
}
