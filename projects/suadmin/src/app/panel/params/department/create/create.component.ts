import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { UtilsService } from 'src/app/utils/utils.service';
import { CountryService } from '../../country/country.service';
import { DepartmentInterface } from '../department.interface';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  public countries$ = this.countrySrv.getCountries();
  
  createForm = new FormGroup({
    name: new FormControl('', { validators: Validators.required }),
    code: new FormControl('', { validators: Validators.required }),
    country_id: new FormControl(null, { validators: Validators.required })
  });

  constructor(
    private router: Router,
    private departmentSrv: DepartmentService,
    private countrySrv: CountryService,
    private utilsSrv: UtilsService
  ) { }
  

  async onSubmit(): Promise<void> {
    let country_id = this.createForm.controls.country_id.value ? this.createForm.controls.country_id.value : 0;
    let department: DepartmentInterface = await lastValueFrom(this.departmentSrv.createDepartment({
      id: 0,
      code: this.createForm.controls.code.value,
      name: this.createForm.controls.name.value,
      country: {
        id: country_id,
        name: null,
        code: null,
        alfa2: null,
        alfa3: null
      }
    }));
    this.utilsSrv.notify('X', 'El registro ha sido creado con éxito con el ID: ' + department.id);
    this.router.navigate(['department']);
  }
}
