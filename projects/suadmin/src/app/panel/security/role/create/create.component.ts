import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { UtilsService } from 'src/app/utils/utils.service';
import { RoleInterface } from '../role.interface';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {

  createForm = new FormGroup({
    name: new FormControl('', { validators: Validators.required }),
    role: new FormControl('', { validators: Validators.required })
  });

  constructor(
    private router: Router,
    private roleSrv: RoleService,
    private utilsSrv: UtilsService
  ) { }
  

  async onSubmit(): Promise<void> {
    let role: RoleInterface = await lastValueFrom(this.roleSrv.createRole({
      id: 0,
      name: this.createForm.controls.name.value,
      role: this.createForm.controls.role.value,
      permissions: []
    }));
    this.utilsSrv.notify('X', 'El registro ha sido creado con éxito con el ID: ' + role.id);
    this.router.navigate(['role']);
  }
}
