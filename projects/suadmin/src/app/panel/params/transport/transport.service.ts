import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TransportInterface } from './transport.interface';

@Injectable({
  providedIn: 'root'
})
export class TransportService {
  private endpoint=`${environment.api}/admin/transport`;
  
  constructor(private httpSrv: HttpClient) { }
  
  getCities(): Observable<TransportInterface[]> {
    return this.httpSrv.get<TransportInterface[]>(this.endpoint);
  }

  getTransport(id: number): Observable<TransportInterface> {
    return this.httpSrv.get<TransportInterface>(`${this.endpoint}/${id}`);
  }

  createTransport(documentType: TransportInterface): Observable<TransportInterface> {
    return this.httpSrv.put<TransportInterface>(this.endpoint, documentType);
  }

  updateTransport(documentType: TransportInterface, id: number): Observable<TransportInterface> {
    return this.httpSrv.patch<TransportInterface>(`${this.endpoint}/${id}`, documentType);
  }

  deleteTransport(id: number): Observable<boolean> {
    return this.httpSrv.delete<boolean>(`${this.endpoint}/${id}`);
  }
}
