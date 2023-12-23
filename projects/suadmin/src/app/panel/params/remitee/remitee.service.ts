import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RemiteeInterface } from './remitee.interface';

@Injectable({
  providedIn: 'root'
})
export class RemiteeService {

  private endpoint=`${environment.api}/admin/projectTypes`;

  constructor(private httpSrv: HttpClient) { }
  
  getCities(): Observable<RemiteeInterface[]> {
    return this.httpSrv.get<RemiteeInterface[]>(this.endpoint);
  }

  getRemitee(id: number): Observable<RemiteeInterface> {
    return this.httpSrv.get<RemiteeInterface>(`${this.endpoint}/${id}`);
  }

  createRemitee(projectType: RemiteeInterface): Observable<RemiteeInterface> {
    return this.httpSrv.put<RemiteeInterface>(this.endpoint, projectType);
  }

  updateRemitee(projectType: RemiteeInterface, id: number): Observable<RemiteeInterface> {
    return this.httpSrv.patch<RemiteeInterface>(`${this.endpoint}/${id}`, projectType);
  }

  deleteRemitee(id: number): Observable<boolean> {
    return this.httpSrv.delete<boolean>(`${this.endpoint}/${id}`);
  }
}
