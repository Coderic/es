import { Component } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { UtilsService } from 'src/app/utils/utils.service';
import { ShipperInterface } from '../shipper.interface';
import { ShipperService } from '../shipper.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  public list$: Observable<ShipperInterface[]> = this.frequencyTypeSrv.getCities();
  public displayedColumns: string[] = ['id', 'name', 'edit', 'delete'];
  public dataSource: ShipperInterface[] = [];


  constructor(private frequencyTypeSrv: ShipperService, private utilsSrv: UtilsService) {
    this.loadShipper();
  }

  async delete(id: number) {
    await lastValueFrom(this.frequencyTypeSrv.deleteShipper(id));
    this.utilsSrv.notify('X','El registro ha sido eliminado con éxito');
    this.loadShipper();
  }
  loadShipper(): void {
    this.list$.subscribe((cities: ShipperInterface[]) => this.dataSource = cities);
  }
}
