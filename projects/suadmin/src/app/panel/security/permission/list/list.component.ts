import { Component } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { UtilsService } from 'src/app/utils/utils.service';
import { PermissionInterface } from '../permission.interface';
import { PermissionService } from '../permission.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  public list$: Observable<PermissionInterface[]> = this.permissionSrv.getPermissions();
  public displayedColumns: string[] = ['id', 'name', 'privilege', 'edit', 'delete'];
  public dataSource: PermissionInterface[] = [];


  constructor(private permissionSrv: PermissionService, private utilsSrv: UtilsService) {
    this.loadPermission();
  }

  async delete(id: number) {
    await lastValueFrom(this.permissionSrv.deletePermission(id));
    this.utilsSrv.notify('X','El registro ha sido eliminado con éxito');
    this.loadPermission();
  }
  loadPermission(): void {
    this.list$.subscribe((cities: PermissionInterface[]) => this.dataSource = cities);
  }
}
