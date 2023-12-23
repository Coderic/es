import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { UtilsService } from 'src/app/utils/utils.service';
import { DepartmentService } from '../../department/department.service';
import { CityInterface } from '../city.interface';
import { CityService } from '../city.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  public departments$ = this.departmentSrv.getDepartments();
  
  createForm = new FormGroup({
    name: new FormControl('', { validators: Validators.required }),
    department_id: new FormControl(0, { validators: Validators.required })
  });

  constructor(
    private router: Router,
    private citySrv: CityService,
    private departmentSrv: DepartmentService,
    private utilsSrv: UtilsService
  ) { }
  
  async onSubmit(): Promise<void> {
    let department_id = this.createForm.controls.department_id.value ? this.createForm.controls.department_id.value : 0;
    let city: CityInterface = await lastValueFrom(this.citySrv.createCity({
      id: 0,
      name: this.createForm.controls.name.value,
      department: {
        id: department_id,
        code: null,
        name: null
      }
    }));
    this.utilsSrv.notify('X', 'El registro ha sido creado con éxito con el ID: ' + city.id);
    this.router.navigate(['city']);
  }
}
