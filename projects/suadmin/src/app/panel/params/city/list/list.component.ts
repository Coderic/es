import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { lastValueFrom, Observable } from 'rxjs';
import { UtilsService } from 'src/app/utils/utils.service';
import { CityInterface } from '../city.interface';
import { CityService } from '../city.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements AfterViewInit {
  @ViewChild(MatSort) sort: MatSort;
  public list$: Observable<CityInterface[]> = this.citySrv.getCities();
  public displayedColumns: string[] = ['id', 'name', 'department', 'country', 'edit', 'delete'];
  public elementData: CityInterface[] = [];
  public dataSource = new MatTableDataSource(this.elementData);

  constructor(private citySrv: CityService, private utilsSrv: UtilsService) {}
  
  ngAfterViewInit() {
    this.list$.subscribe((cities: CityInterface[]) => this.dataSource.data = cities);
    this.dataSource.sort = this.sort;
  }

  async delete(id: number) {
    await lastValueFrom(this.citySrv.deleteCity(id));
    this.utilsSrv.notify('X','El registro ha sido eliminado con éxito');
    this.ngAfterViewInit();
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
