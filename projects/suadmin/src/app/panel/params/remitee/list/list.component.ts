import { Component } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { UtilsService } from 'src/app/utils/utils.service';
import { RemiteeInterface } from '../remitee.interface';
import { RemiteeService } from '../remitee.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  public list$: Observable<RemiteeInterface[]> = this.projectTypeSrv.getCities();
  public displayedColumns: string[] = ['id', 'name', 'edit', 'delete'];
  public dataSource: RemiteeInterface[] = [];


  constructor(private projectTypeSrv: RemiteeService, private utilsSrv: UtilsService) {
    this.loadRemitee();
  }

  async delete(id: number) {
    await lastValueFrom(this.projectTypeSrv.deleteRemitee(id));
    this.utilsSrv.notify('X','El registro ha sido eliminado con éxito');
    this.loadRemitee();
  }
  loadRemitee(): void {
    this.list$.subscribe((cities: RemiteeInterface[]) => this.dataSource = cities);
  }
}
