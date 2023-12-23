import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CityInterface } from './city.interface';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  private endpoint=`${environment.api}/admin/cities`;

  constructor(private httpSrv: HttpClient) { }
  
  getCities(): Observable<CityInterface[]> {
    return this.httpSrv.get<CityInterface[]>(this.endpoint);
  }

  getCity(id: number): Observable<CityInterface> {
    return this.httpSrv.get<CityInterface>(`${this.endpoint}/${id}`);
  }

  createCity(city: CityInterface): Observable<CityInterface> {
    return this.httpSrv.put<CityInterface>(this.endpoint, city);
  }

  updateCity(city: CityInterface, id: number): Observable<CityInterface> {
    return this.httpSrv.patch<CityInterface>(`${this.endpoint}/${id}`, city);
  }

  deleteCity(id: number): Observable<boolean> {
    return this.httpSrv.delete<boolean>(`${this.endpoint}/${id}`);
  }
}
