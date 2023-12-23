import { Component } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { UtilsService } from 'src/app/utils/utils.service';
import { CompanyIdentificationTypeInterface } from '../company-identification-type.interface';
import { CompanyIdentificationTypeService } from '../company-identification-type.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  public list$: Observable<CompanyIdentificationTypeInterface[]> = this.companyIdentificationTypeSrv.getCities();
  public displayedColumns: string[] = ['id', 'name', 'edit', 'delete'];
  public dataSource: CompanyIdentificationTypeInterface[] = [];

  constructor(private companyIdentificationTypeSrv: CompanyIdentificationTypeService, private utilsSrv: UtilsService) {
    this.loadCompanyIdentificationType();
  }

  async delete(id: number) {
    await lastValueFrom(this.companyIdentificationTypeSrv.deleteCompanyIdentificationType(id));
    this.utilsSrv.notify('X','El registro ha sido eliminado con éxito');
    this.loadCompanyIdentificationType();
  }
  loadCompanyIdentificationType(): void {
    this.list$.subscribe((cities: CompanyIdentificationTypeInterface[]) => this.dataSource = cities);
  }
}
