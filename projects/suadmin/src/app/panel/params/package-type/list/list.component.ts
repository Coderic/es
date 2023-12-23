import { Component } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { UtilsService } from 'src/app/utils/utils.service';
import { PackageTypeInterface } from '../package-type.interface';
import { PackageTypeService } from '../package-type.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  public list$: Observable<PackageTypeInterface[]> = this.ruleTypeSrv.getCities();
  public displayedColumns: string[] = ['id', 'name', 'edit', 'delete'];
  public dataSource: PackageTypeInterface[] = [];


  constructor(private ruleTypeSrv: PackageTypeService, private utilsSrv: UtilsService) {
    this.loadPackageType();
  }

  async delete(id: number) {
    await lastValueFrom(this.ruleTypeSrv.deletePackageType(id));
    this.utilsSrv.notify('X','El registro ha sido eliminado con éxito');
    this.loadPackageType();
  }
  loadPackageType(): void {
    this.list$.subscribe((cities: PackageTypeInterface[]) => this.dataSource = cities);
  }
}
