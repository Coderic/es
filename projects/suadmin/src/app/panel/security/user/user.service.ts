import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserInterface } from './user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private endpoint=`${environment.api}/admin/users`;

  constructor(private httpSrv: HttpClient) { }
  
  getUsers(): Observable<UserInterface[]> {
    return this.httpSrv.get<UserInterface[]>(this.endpoint);
  }

  getUser(id: number): Observable<UserInterface> {
    return this.httpSrv.get<UserInterface>(`${this.endpoint}/${id}`);
  }

  createUser(user: UserInterface): Observable<UserInterface> {
    return this.httpSrv.put<UserInterface>(this.endpoint, user);
  }

  updateUser(user: UserInterface, id: number): Observable<UserInterface> {
    return this.httpSrv.patch<UserInterface>(`${this.endpoint}/${id}`, user);
  }

  deleteUser(id: number): Observable<boolean> {
    return this.httpSrv.delete<boolean>(`${this.endpoint}/${id}`);
  }
}
