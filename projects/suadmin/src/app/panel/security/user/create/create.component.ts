import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { UtilsService } from 'src/app/utils/utils.service';
import { UserInterface } from '../user.interface';
import { UserService } from '../user.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {

  createForm = new FormGroup({
    username: new FormControl('', { validators: Validators.required }),
    password: new FormControl('', { validators: Validators.required }),
    enabled: new FormControl(false)
  });

  constructor(
    private router: Router,
    private userSrv: UserService,
    private utilsSrv: UtilsService
  ) { }
  

  async onSubmit(): Promise<void> {
    let user: UserInterface = await lastValueFrom(this.userSrv.createUser({
      id: 0,
      username: this.createForm.controls.username.value,
      password: this.createForm.controls.password.value,
      enabled: this.createForm.controls.enabled.value,
      roles: [],
      groups: [],
      permissions: []
    }));
    this.utilsSrv.notify('X', 'El registro ha sido creado con éxito con el ID: ' + user.id);
    this.router.navigate(['user']);
  }
}
