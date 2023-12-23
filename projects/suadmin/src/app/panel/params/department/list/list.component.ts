import { Component } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { UtilsService } from 'src/app/utils/utils.service';
import { DepartmentInterface } from '../department.interface';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  public list$: Observable<DepartmentInterface[]> = this.departmentSrv.getDepartments();
  public displayedColumns: string[] = ['id', 'name', 'code', 'country', 'edit', 'delete'];
  public dataSource: DepartmentInterface[] = [];


  constructor(private departmentSrv: DepartmentService, private utilsSrv: UtilsService) {
    this.loadDepartment();
  }

  async delete(id: number) {
    await lastValueFrom(this.departmentSrv.deleteDepartment(id));
    this.utilsSrv.notify('X','El registro ha sido eliminado con éxito');
    this.loadDepartment();
  }
  loadDepartment(): void {
    this.list$.subscribe((cities: DepartmentInterface[]) => this.dataSource = cities);
  }
}
