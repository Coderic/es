import { Component, OnInit } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { UtilsService } from 'src/app/utils/utils.service';
import { CountryInterface } from '../country.interface';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public list$: Observable<CountryInterface[]> = this.countrySrv.getCountries();
  public displayedColumns: string[] = ['id', 'name', 'code', 'alfa2', 'alfa3', 'edit', 'delete'];
  public countries: CountryInterface[] | null = null;

  constructor(private countrySrv: CountryService, private utilsSrv: UtilsService) { }

  ngOnInit() {
    this.list$.subscribe((countries: CountryInterface[]) => this.countries = countries);
  }

  async delete(id: number) {
    await lastValueFrom(this.countrySrv.deleteCountry(id));
    this.utilsSrv.notify('X','El registro ha sido eliminado con éxito');
    this.ngOnInit();
  }
}
