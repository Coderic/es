import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { UtilsService } from 'src/app/utils/utils.service';
import { PermissionInterface } from '../permission.interface';
import { PermissionService } from '../permission.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  
  createForm = new FormGroup({
    name: new FormControl(null, { validators: Validators.required }),
    privilege: new FormControl(null, { validators: Validators.required })
  });

  constructor(
    private router: Router,
    private permissionSrv: PermissionService,
    private utilsSrv: UtilsService
  ) { }
  

  async onSubmit(): Promise<void> {
    if(this.createForm.valid) {
      let request = {
        id: 0,
        name: this.createForm.controls.name.value,
        privilege: this.createForm.controls.privilege.value,
      }
      let permission: PermissionInterface = await lastValueFrom(this.permissionSrv.createPermission(request));
      this.utilsSrv.notify('X', 'El registro ha sido creado con éxito con el ID: ' + permission.id);
      this.router.navigate(['permission']);
    }
  }
}
