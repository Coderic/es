import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ContractTypeInterface } from './contract-type.interface';

@Injectable({
  providedIn: 'root'
})
export class ContractTypeService {

  private endpoint=`${environment.api}/admin/contractTypes`;
  
  constructor(private httpSrv: HttpClient) { }
  
  getCities(): Observable<ContractTypeInterface[]> {
    return this.httpSrv.get<ContractTypeInterface[]>(this.endpoint);
  }

  getContractType(id: number): Observable<ContractTypeInterface> {
    return this.httpSrv.get<ContractTypeInterface>(`${this.endpoint}/${id}`);
  }

  createContractType(contractType: ContractTypeInterface): Observable<ContractTypeInterface> {
    return this.httpSrv.put<ContractTypeInterface>(this.endpoint, contractType);
  }

  updateContractType(contractType: ContractTypeInterface, id: number): Observable<ContractTypeInterface> {
    return this.httpSrv.patch<ContractTypeInterface>(`${this.endpoint}/${id}`, contractType);
  }

  deleteContractType(id: number): Observable<boolean> {
    return this.httpSrv.delete<boolean>(`${this.endpoint}/${id}`);
  }
}
