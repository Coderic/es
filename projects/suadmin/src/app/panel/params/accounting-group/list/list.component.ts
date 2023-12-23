import { Component, OnInit } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { UtilsService } from 'src/app/utils/utils.service';
import { AccountingGroupInterface } from '../accounting-group.interface';
import { AccountingGroupService } from '../accounting-group.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public list$: Observable<AccountingGroupInterface[]> = this.accountingGroupSrv.getCities();
  public displayedColumns: string[] = ['id', 'name', 'edit', 'delete'];
  public dataSource: AccountingGroupInterface[] = [];

  constructor(
    private accountingGroupSrv: AccountingGroupService,
    private utilsSrv: UtilsService
  ) { }

  ngOnInit(): void {
    this.list$.subscribe((cities: AccountingGroupInterface[]) => this.dataSource = cities);
  }

  async delete(id: number) {
    await lastValueFrom(this.accountingGroupSrv.deleteAccountingGroup(id));
    this.utilsSrv.notify('X', 'El registro ha sido eliminado con éxito');
    this.ngOnInit();
  }
}
