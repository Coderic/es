import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CompanyIdentificationTypeInterface } from './company-identification-type.interface';

@Injectable({
  providedIn: 'root'
})
export class CompanyIdentificationTypeService {

  private endpoint=`${environment.api}/admin/companyIdentificationTypes`;

  constructor(private httpSrv: HttpClient) { }
  
  getCities(): Observable<CompanyIdentificationTypeInterface[]> {
    return this.httpSrv.get<CompanyIdentificationTypeInterface[]>(this.endpoint);
  }

  getCompanyIdentificationType(id: number): Observable<CompanyIdentificationTypeInterface> {
    return this.httpSrv.get<CompanyIdentificationTypeInterface>(`${this.endpoint}/${id}`);
  }

  createCompanyIdentificationType(companyIdentificationType: CompanyIdentificationTypeInterface): Observable<CompanyIdentificationTypeInterface> {
    return this.httpSrv.put<CompanyIdentificationTypeInterface>(this.endpoint, companyIdentificationType);
  }

  updateCompanyIdentificationType(companyIdentificationType: CompanyIdentificationTypeInterface, id: number): Observable<CompanyIdentificationTypeInterface> {
    return this.httpSrv.patch<CompanyIdentificationTypeInterface>(`${this.endpoint}/${id}`, companyIdentificationType);
  }

  deleteCompanyIdentificationType(id: number): Observable<boolean> {
    return this.httpSrv.delete<boolean>(`${this.endpoint}/${id}`);
  }
}
