import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PackageInterface } from './package.interface';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  private endpoint=`${environment.api}/admin/packages`;

  constructor(private httpSrv: HttpClient) { }
  
  getPackages(): Observable<PackageInterface[]> {
    return this.httpSrv.get<PackageInterface[]>(this.endpoint);
  }

  getPackage(id: number): Observable<PackageInterface> {
    return this.httpSrv.get<PackageInterface>(`${this.endpoint}/${id}`);
  }

  createPackage(ePackage: PackageInterface): Observable<PackageInterface> {
    return this.httpSrv.put<PackageInterface>(this.endpoint, ePackage);
  }

  updatePackage(ePackage: PackageInterface, id: number): Observable<PackageInterface> {
    return this.httpSrv.patch<PackageInterface>(`${this.endpoint}/${id}`, ePackage);
  }

  deletePackage(id: number): Observable<boolean> {
    return this.httpSrv.delete<boolean>(`${this.endpoint}/${id}`);
  }
}
