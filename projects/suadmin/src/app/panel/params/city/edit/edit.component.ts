import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { UtilsService } from 'src/app/utils/utils.service';
import { DepartmentService } from '../../department/department.service';
import { CityInterface } from '../city.interface';
import { CityService } from '../city.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  public itemId: string | null = this.route.snapshot.paramMap.get('id');
  public id: number = this.itemId ? parseInt(this.itemId) : 0;

  public city: CityInterface;
  public departments$ = this.departmentSrv.getDepartments();

  editForm = new FormGroup({
    id: new FormControl(this.id),
    name: new FormControl('', { validators: Validators.required }),
    department_id: new FormControl(0, { validators: Validators.required })
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private citySrv: CityService,
    private departmentSrv: DepartmentService,
    private utilsSrv: UtilsService
  ) {
    this.loadItem();
  }

  loadItem() {
    this.citySrv.getCity(this.id)
      .subscribe((city: CityInterface) => {
        this.city = city;
        if (city.name)
          this.editForm.controls.name.setValue(city.name);
        if (city.department)
          this.editForm.controls.department_id.setValue(city.department.id);

      });
  }

  async onSubmit(): Promise<void> {
    let department_id = this.editForm.controls.department_id.value ? this.editForm.controls.department_id.value : 0;
    if (this.id) {
      let city = {
        id: 0,
        name: this.editForm.controls.name.value,
        department: {
          id: department_id,
          code: null,
          name: null
        }
      };

      this.city = await lastValueFrom(this.citySrv.updateCity(city, this.id));

      this.utilsSrv.notify('X', 'El registro con el ID: ' + this.city.id + ' ha sido actualizado con éxito');
      this.router.navigate(['city']);
    }
  }

  async delete() {
    await lastValueFrom(this.citySrv.deleteCity(this.id));
    this.utilsSrv.notify('X', 'El registro ha sido eliminado con éxito');
    this.router.navigate(['city']);
  }
}
