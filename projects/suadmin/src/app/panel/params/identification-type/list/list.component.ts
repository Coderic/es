import { Component } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { UtilsService } from 'src/app/utils/utils.service';
import { IdentificationTypeInterface } from '../identification-type.interface';
import { IdentificationTypeService } from '../identification-type.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  public list$: Observable<IdentificationTypeInterface[]> = this.identificationTypeSrv.getIdentificationTypes();
  public displayedColumns: string[] = ['id', 'name', 'edit', 'delete'];
  public dataSource: IdentificationTypeInterface[] = [];


  constructor(private identificationTypeSrv: IdentificationTypeService, private utilsSrv: UtilsService) {
    this.loadIdentificationType();
  }

  async delete(id: number) {
    await lastValueFrom(this.identificationTypeSrv.deleteIdentificationType(id));
    this.utilsSrv.notify('X','El registro ha sido eliminado con éxito');
    this.loadIdentificationType();
  }
  loadIdentificationType(): void {
    this.list$.subscribe((cities: IdentificationTypeInterface[]) => this.dataSource = cities);
  }
}
