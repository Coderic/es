import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ShipperInterface } from './shipper.interface';

@Injectable({
  providedIn: 'root'
})
export class ShipperService {

  private endpoint=`${environment.api}/admin/shipper`;

  constructor(private httpSrv: HttpClient) { }
  
  getCities(): Observable<ShipperInterface[]> {
    return this.httpSrv.get<ShipperInterface[]>(this.endpoint);
  }

  getShipper(id: number): Observable<ShipperInterface> {
    let url = `${this.endpoint}/${id}`;
    return this.httpSrv.get<ShipperInterface>(url);
  }

  createShipper(frequencyType: ShipperInterface): Observable<ShipperInterface> {
    return this.httpSrv.put<ShipperInterface>(this.endpoint, frequencyType);
  }

  updateShipper(frequencyType: ShipperInterface, id: number): Observable<ShipperInterface> {
    let url = `${this.endpoint}/${id}`;
    return this.httpSrv.patch<ShipperInterface>(url, frequencyType);
  }

  deleteShipper(id: number): Observable<boolean> {
    let url = `${this.endpoint}/${id}`;
    return this.httpSrv.delete<boolean>(url);
  }
}
