import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { lastValueFrom, Observable } from 'rxjs';
import { UtilsService } from 'src/app/utils/utils.service';
import { CurrencyTypeInterface } from '../currency-type.interface';
import { CurrencyTypeService } from '../currency-type.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements AfterViewInit {
  @ViewChild(MatSort) sort: MatSort;

  public list$: Observable<CurrencyTypeInterface[]> = this.currencyTypeSrv.getCities();
  public displayedColumns: string[] = ['id', 'name', 'code', 'edit', 'delete'];
  public dataElement: CurrencyTypeInterface[] = [];
  public dataSource = new MatTableDataSource();


  constructor(private currencyTypeSrv: CurrencyTypeService, private utilsSrv: UtilsService) {}

  ngAfterViewInit() {
    this.list$.subscribe((cities: CurrencyTypeInterface[]) => this.dataSource.data = cities);
    this.dataSource.sort = this.sort;
  }

  async delete(id: number) {
    await lastValueFrom(this.currencyTypeSrv.deleteCurrencyType(id));
    this.utilsSrv.notify('X','El registro ha sido eliminado con éxito');
    this.ngAfterViewInit();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
