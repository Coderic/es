import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DepartmentInterface } from './department.interface';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private endpoint=`${environment.api}/admin/departments`;

  constructor(private httpSrv: HttpClient) { }
  
  getDepartments(): Observable<DepartmentInterface[]> {
    return this.httpSrv.get<DepartmentInterface[]>(this.endpoint);
  }

  getDepartment(id: number): Observable<DepartmentInterface> {
    return this.httpSrv.get<DepartmentInterface>(`${this.endpoint}/${id}`);
  }

  createDepartment(city: DepartmentInterface): Observable<DepartmentInterface> {
    return this.httpSrv.put<DepartmentInterface>(this.endpoint, city);
  }

  updateDepartment(city: DepartmentInterface, id: number): Observable<DepartmentInterface> {
    return this.httpSrv.patch<DepartmentInterface>(`${this.endpoint}/${id}`, city);
  }

  deleteDepartment(id: number): Observable<boolean> {
    return this.httpSrv.delete<boolean>(`${this.endpoint}/${id}`);
  }
}
