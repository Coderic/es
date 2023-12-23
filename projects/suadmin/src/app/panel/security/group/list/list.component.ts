import { Component } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { UtilsService } from 'src/app/utils/utils.service';
import { GroupInterface } from '../group.interface';
import { GroupService } from '../group.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  public list$: Observable<GroupInterface[]> = this.roleSrv.getGroups();
  public displayedColumns: string[] = ['id', 'groupName', 'edit', 'delete'];
  public dataSource: GroupInterface[] = [];


  constructor(private roleSrv: GroupService, private utilsSrv: UtilsService) {
    this.loadGroup();
  }

  async delete(id: number) {
    await lastValueFrom(this.roleSrv.deleteGroup(id));
    this.utilsSrv.notify('X','El registro ha sido eliminado con éxito');
    this.loadGroup();
  }
  loadGroup(): void {
    this.list$.subscribe((cities: GroupInterface[]) => this.dataSource = cities);
  }
}
