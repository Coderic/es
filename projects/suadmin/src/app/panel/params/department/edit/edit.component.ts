import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { UtilsService } from 'src/app/utils/utils.service';
import { CountryService } from '../../country/country.service';
import { DepartmentInterface } from '../department.interface';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  public itemId: string | null = this.route.snapshot.paramMap.get('id');
  public id: number = this.itemId ? parseInt(this.itemId) : 0;

  public department: DepartmentInterface;
  public countries$ = this.countrySrv.getCountries();

  editForm = new FormGroup({
    id: new FormControl(this.id),
    code: new FormControl('', { validators: Validators.required, nonNullable: true }),
    name: new FormControl('', { validators: Validators.required }),
    country_id: new FormControl(0, { validators: Validators.required }),
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private departmentSrv: DepartmentService,
    private countrySrv: CountryService,
    private utilsSrv: UtilsService
  ) {
    this.loadItem();
  }

  loadItem() {
    this.departmentSrv.getDepartment(this.id)
      .subscribe((department: DepartmentInterface) => {
        this.department = department;

        if(department.code)
          this.editForm.controls.code.setValue(department.code);
          if(department.name)
            this.editForm.controls.name.setValue(department.name);
        if(department.country)
          this.editForm.controls.country_id.setValue(department.country.id);
          
      });
  }

  async onSubmit(): Promise<void> {
    let country_id = this.editForm.controls.country_id.value ? this.editForm.controls.country_id.value : 0;
    if (this.id) {
      let department = {
        id: 0,
        name: this.editForm.controls.name.value,
        code: this.editForm.controls.code.value,
        country: {
          id: country_id,
          name: null,
          code: null,
          alfa2: null,
          alfa3: null
        }
      };

      this.department = await lastValueFrom(this.departmentSrv.updateDepartment(department, this.id));

      this.utilsSrv.notify('X', 'El registro con el ID: ' + this.department.id + ' ha sido actualizado con éxito');
      this.router.navigate(['department']);
    }
  }

  async delete() {
    await lastValueFrom(this.departmentSrv.deleteDepartment(this.id));
    this.utilsSrv.notify('X', 'El registro ha sido eliminado con éxito');
    this.router.navigate(['city']);
    this.loadItem();
  }
}
