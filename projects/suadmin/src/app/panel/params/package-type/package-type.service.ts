import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PackageTypeInterface } from './package-type.interface';

@Injectable({
  providedIn: 'root'
})
export class PackageTypeService {

  private endpoint=`${environment.api}/admin/packageTypes`;

  constructor(private httpSrv: HttpClient) { }
  
  getCities(): Observable<PackageTypeInterface[]> {
    return this.httpSrv.get<PackageTypeInterface[]>(this.endpoint);
  }

  getPackageType(id: number): Observable<PackageTypeInterface> {
    return this.httpSrv.get<PackageTypeInterface>(`${this.endpoint}/${id}`);
  }

  createPackageType(ruleType: PackageTypeInterface): Observable<PackageTypeInterface> {
    return this.httpSrv.put<PackageTypeInterface>(this.endpoint, ruleType);
  }

  updatePackageType(ruleType: PackageTypeInterface, id: number): Observable<PackageTypeInterface> {
    return this.httpSrv.patch<PackageTypeInterface>(`${this.endpoint}/${id}`, ruleType);
  }

  deletePackageType(id: number): Observable<boolean> {
    return this.httpSrv.delete<boolean>(`${this.endpoint}/${id}`);
  }
}
