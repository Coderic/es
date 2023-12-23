import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IdentificationTypeInterface } from './identification-type.interface';

@Injectable({
  providedIn: 'root'
})
export class IdentificationTypeService {
  
  private endpoint=`${environment.api}/admin/identificationTypes`;

  constructor(private httpSrv: HttpClient) { }
  
  getIdentificationTypes(): Observable<IdentificationTypeInterface[]> {
    return this.httpSrv.get<IdentificationTypeInterface[]>(this.endpoint);
  }

  getIdentificationType(id: number): Observable<IdentificationTypeInterface> {
    return this.httpSrv.get<IdentificationTypeInterface>(`${this.endpoint}/${id}`);
  }

  createIdentificationType(identificationType: IdentificationTypeInterface): Observable<IdentificationTypeInterface> {
    return this.httpSrv.put<IdentificationTypeInterface>(this.endpoint, identificationType);
  }

  updateIdentificationType(identificationType: IdentificationTypeInterface, id: number): Observable<IdentificationTypeInterface> {
    return this.httpSrv.patch<IdentificationTypeInterface>(`${this.endpoint}/${id}`, identificationType);
  }

  deleteIdentificationType(id: number): Observable<boolean> {
    return this.httpSrv.delete<boolean>(`${this.endpoint}/${id}`);
  }
}
