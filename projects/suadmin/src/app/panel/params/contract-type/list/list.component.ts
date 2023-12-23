import { Component } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { UtilsService } from 'src/app/utils/utils.service';
import { ContractTypeInterface } from '../contract-type.interface';
import { ContractTypeService } from '../contract-type.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  public list$: Observable<ContractTypeInterface[]> = this.contractTypeSrv.getCities();
  public displayedColumns: string[] = ['id', 'name', 'edit', 'delete'];
  public dataSource: ContractTypeInterface[] = [];


  constructor(private contractTypeSrv: ContractTypeService, private utilsSrv: UtilsService) {
    this.loadContractType();
  }

  async delete(id: number) {
    await lastValueFrom(this.contractTypeSrv.deleteContractType(id));
    this.utilsSrv.notify('X','El registro ha sido eliminado con éxito');
    this.loadContractType();
  }
  loadContractType(): void {
    this.list$.subscribe((cities: ContractTypeInterface[]) => this.dataSource = cities);
  }
}
