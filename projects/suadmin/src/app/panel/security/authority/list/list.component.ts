import { Component, OnInit } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { UtilsService } from 'src/app/utils/utils.service';
import { AuthorityInterface } from '../authority.interface';
import { AuthorityService } from '../authority.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public list$: Observable<AuthorityInterface[]> = this.authoritySrv.getAuthorities();
  public displayedColumns: string[] = ['id', 'username', 'authority', 'edit', 'delete'];
  public dataSource: AuthorityInterface[] = [];


  constructor(private authoritySrv: AuthorityService, private utilsSrv: UtilsService) {  }

  ngOnInit(): void {
    this.list$.subscribe((cities: AuthorityInterface[]) => this.dataSource = cities);
  }

  delete(id: number) {
    lastValueFrom(this.authoritySrv.deleteAuthority(id));
    this.ngOnInit();
    this.utilsSrv.notify('X','El registro ha sido eliminado con éxito');
  }
}
