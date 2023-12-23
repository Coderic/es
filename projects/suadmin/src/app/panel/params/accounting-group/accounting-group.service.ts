import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AccountingGroupInterface } from './accounting-group.interface';

@Injectable({
  providedIn: 'root'
})
export class AccountingGroupService {
  public endpoint=`${environment.api}/admin/accountingGroups`;

  constructor(private httpSrv: HttpClient) { }
  
  getCities(): Observable<AccountingGroupInterface[]> {
    return this.httpSrv.get<AccountingGroupInterface[]>(this.endpoint);
  }

  getAccountingGroup(id: number): Observable<AccountingGroupInterface> {
    return this.httpSrv.get<AccountingGroupInterface>(`${this.endpoint}/${id}`);
  }

  createAccountingGroup(accountingGroup: AccountingGroupInterface): Observable<AccountingGroupInterface> {
    return this.httpSrv.put<AccountingGroupInterface>(this.endpoint, accountingGroup);
  }

  updateAccountingGroup(accountingGroup: AccountingGroupInterface, id: number): Observable<AccountingGroupInterface> {
    return this.httpSrv.patch<AccountingGroupInterface>(`${this.endpoint}/${id}`, accountingGroup);
  }

  deleteAccountingGroup(id: number): Observable<boolean> {
    return this.httpSrv.delete<boolean>(`${this.endpoint}/${id}`);
  }
}
