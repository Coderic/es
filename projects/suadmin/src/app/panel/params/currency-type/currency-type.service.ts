import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CurrencyTypeInterface } from './currency-type.interface';

@Injectable({
  providedIn: 'root'
})
export class CurrencyTypeService {
  private endpoint=`${environment.api}/admin/currencyTypes`;

  constructor(private httpSrv: HttpClient) { }
  
  getCities(): Observable<CurrencyTypeInterface[]> {
    return this.httpSrv.get<CurrencyTypeInterface[]>(this.endpoint);
  }

  getCurrencyType(id: number): Observable<CurrencyTypeInterface> {
    return this.httpSrv.get<CurrencyTypeInterface>(`${this.endpoint}/${id}`);
  }

  isCurrencyType(id: number): Observable<CurrencyTypeInterface> {
    return this.httpSrv.head<CurrencyTypeInterface>(`${this.endpoint}/${id}`);
  }

  createCurrencyType(currencyType: CurrencyTypeInterface): Observable<CurrencyTypeInterface> {
    return this.httpSrv.put<CurrencyTypeInterface>(this.endpoint, currencyType);
  }

  updateCurrencyType(currencyType: CurrencyTypeInterface, id: number): Observable<CurrencyTypeInterface> {
    return this.httpSrv.patch<CurrencyTypeInterface>(`${this.endpoint}/${id}`, currencyType);
  }

  deleteCurrencyType(id: number): Observable<boolean> {
    return this.httpSrv.delete<boolean>(`${this.endpoint}/${id}`);
  }
}
