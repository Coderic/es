import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType , HttpRequest, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PackageInterface, PackageTypeInterface, RemitteeInterface, ShipperInterface } from './panel.interface';
import { CountryInterface } from 'projects/suadmin/src/app/panel/params/country/country.interface';
import { CityInterface } from 'projects/suadmin/src/app/panel/params/city/city.interface';
import { DepartmentInterface } from 'projects/suadmin/src/app/panel/params/department/department.interface';
import { map } from  'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PanelService {
  private endpoint=`${environment.api}/panel`;
  
  constructor(private httpSrv: HttpClient) { }
  uploadFile(file: File) {

    const formData = new FormData();
    formData.append("file", file);

    //let url = 'https://webhook.site/ca53845b-944f-4a28-81a5-467d0c630886';
    let url = `http://localhost:8080/upload`;
    //return this.httpSrv.post(url,formData);
    return this.httpSrv.post(url, formData);
    /*
    const req = new HttpRequest('POST', url, formData, {
      reportProgress: true,HttpHeaders({
        "Content-Type": "multipart/form-data"
      }
      headers: new )
    });

    return this.httpSrv.request(req);*/
  }
  
  getPackageTypes(): Observable<PackageTypeInterface[]> {
    let url = `${this.endpoint}/packages/types`;
    return this.httpSrv.get<PackageTypeInterface[]>(url);
  }

  getShippers(): Observable<ShipperInterface[]> {
    let url = `${this.endpoint}/packages/shippers`;
    return this.httpSrv.get<ShipperInterface[]>(url);
  }

  getSenders(): Observable<RemitteeInterface[]> {
    let url = `${this.endpoint}/packages/senders`;
    return this.httpSrv.get<RemitteeInterface[]>(url);
  }

  getRemittee(id: number): Observable<RemitteeInterface> {
    let url = `${this.endpoint}/remittee`;
    return this.httpSrv.get<RemitteeInterface>(`${url}/${id}`);
  }

  getShipper(id: number): Observable<ShipperInterface> {
    let url = `${this.endpoint}/shipper`;
    return this.httpSrv.get<ShipperInterface>(`${url}/${id}`);
  }

  getPackageType(id: number): Observable<PackageTypeInterface> {
    let url = `${this.endpoint}/packageType`;
    return this.httpSrv.get<PackageTypeInterface>(`${url}/${id}`);
  }

  createPackage(paquete: PackageInterface): Observable<PackageInterface> {
    let url = `${this.endpoint}/packages/add`;
    return this.httpSrv.put<PackageInterface>(url, paquete);
  }
  
  getPackages(): Observable<PackageInterface[]> {
    let url = `${this.endpoint}/packages`;
    return this.httpSrv.get<PackageInterface[]>(url);
  }

  getCountries(): Observable<CountryInterface[]> {
    let url = `${this.endpoint}/remittee/countries`;
    return this.httpSrv.get<CountryInterface[]>(url);
  }
  
  getDepartments(): Observable<DepartmentInterface[]> {
    let url = `${this.endpoint}/remittee/departments`;
    return this.httpSrv.get<DepartmentInterface[]>(url);
  }

  getCities(): Observable<CityInterface[]> {
    let url = `${this.endpoint}/remittee/cities`;
    return this.httpSrv.get<CityInterface[]>(url);
  }

  addRemittee(remittee: RemitteeInterface): Observable<RemitteeInterface> {
    let url = `${this.endpoint}/remittee/add`;
    return this.httpSrv.put<RemitteeInterface>(url, remittee);
  }

  getPackage(id: number): Observable<PackageInterface> {
    return this.httpSrv.get<PackageInterface>(`${this.endpoint}/${id}`);
  }


  updatePackage(paquete: PackageInterface, id: number): Observable<PackageInterface> {
    return this.httpSrv.patch<PackageInterface>(`${this.endpoint}/${id}`, paquete);
  }

  deletePackage(id: number): Observable<boolean> {
    return this.httpSrv.delete<boolean>(`${this.endpoint}/${id}`);
  }
}
