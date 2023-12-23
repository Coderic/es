import { Component } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { UtilsService } from 'src/app/utils/utils.service';
import { PackageInterface } from '../package.interface';
import { PackageService } from '../package.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  public list$: Observable<PackageInterface[]> = this.packageSrv.getPackages();
  public displayedColumns: string[] = ['id', 'name', 'edit', 'delete'];
  public dataSource: PackageInterface[] = [];


  constructor(private packageSrv: PackageService, private utilsSrv: UtilsService) {
    this.loadPackage();
  }

  async delete(id: number) {
    await lastValueFrom(this.packageSrv.deletePackage(id));
    this.utilsSrv.notify('X','El registro ha sido eliminado con éxito');
    this.loadPackage();
  }
  loadPackage(): void {
    this.list$.subscribe((cities: PackageInterface[]) => this.dataSource = cities);
  }
}
