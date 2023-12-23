import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CountryInterface } from './country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private endpoint=`${environment.api}/admin/countries`;
  
  constructor(private httpSrv: HttpClient) { }
  
  getCountries(): Observable<CountryInterface[]> {
    return this.httpSrv.get<CountryInterface[]>(this.endpoint);
  }

  getCountry(id: number): Observable<CountryInterface> {
    return this.httpSrv.get<CountryInterface>(`${this.endpoint}/${id}`);
  }

  createCountry(country: CountryInterface): Observable<CountryInterface> {
    return this.httpSrv.put<CountryInterface>(this.endpoint, country);
  }

  updateCountry(country: CountryInterface, id: number): Observable<CountryInterface> {
    return this.httpSrv.patch<CountryInterface>(`${this.endpoint}/${id}`, country);
  }

  deleteCountry(id: number): Observable<boolean> {
    return this.httpSrv.delete<boolean>(`${this.endpoint}/${id}`);
  }
}
