import { Component } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { UtilsService } from 'src/app/utils/utils.service';
import { UserInterface } from '../user.interface';
import { UserService } from '../user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  public list$: Observable<UserInterface[]> = this.userSrv.getUsers();
  public displayedColumns: string[] = ['id', 'username', 'enabled', 'roles', 'edit', 'delete'];
  public dataSource: UserInterface[] = [];


  constructor(private userSrv: UserService, private utilsSrv: UtilsService) {
    this.loadUser();
  }

  async delete(id: number) {
    await lastValueFrom(this.userSrv.deleteUser(id));
    this.utilsSrv.notify('X','El registro ha sido eliminado con éxito');
    this.loadUser();
  }
  loadUser(): void {
    this.list$.subscribe((cities: UserInterface[]) => this.dataSource = cities);
  }
}
