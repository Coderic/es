import { Component } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { UtilsService } from 'src/app/utils/utils.service';
import { TransportInterface } from '../transport.interface';
import { TransportService } from '../transport.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  public list$: Observable<TransportInterface[]> = this.documentTypeSrv.getCities();
  public displayedColumns: string[] = ['id', 'name', 'edit', 'delete'];
  public dataSource: TransportInterface[] = [];


  constructor(private documentTypeSrv: TransportService, private utilsSrv: UtilsService) {
    this.loadTransport();
  }

  async delete(id: number) {
    await lastValueFrom(this.documentTypeSrv.deleteTransport(id));
    this.utilsSrv.notify('X','El registro ha sido eliminado con éxito');
    this.loadTransport();
  }
  loadTransport(): void {
    this.list$.subscribe((cities: TransportInterface[]) => this.dataSource = cities);
  }
}
