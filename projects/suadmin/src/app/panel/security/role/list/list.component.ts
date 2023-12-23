import { Component } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { UtilsService } from 'src/app/utils/utils.service';
import { RoleInterface } from '../role.interface';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  public list$: Observable<RoleInterface[]> = this.roleSrv.getRoles();
  public displayedColumns: string[] = ['id', 'name', 'role', 'edit', 'delete'];
  public dataSource: RoleInterface[] = [];

  constructor(private roleSrv: RoleService, private utilsSrv: UtilsService) {
    this.loadRole();
  }

  async delete(id: number) {
    await lastValueFrom(this.roleSrv.deleteRole(id));
    this.utilsSrv.notify('X','El registro ha sido eliminado con éxito');
    this.loadRole();
  }
  loadRole(): void {
    this.list$.subscribe((cities: RoleInterface[]) => this.dataSource = cities);
  }
}
