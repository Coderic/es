import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/security/auth.service';
import { CheckUserSecurityValidator } from 'src/app/security/check-user-security.validator';

@Component({
  selector: 'lib-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent {

  constructor(
    private router: Router,
    private authSrv: AuthService,
    private checkUserVl: CheckUserSecurityValidator
  ) { }

  authForm = new FormGroup({
    username: new FormControl(null, {
      validators: [Validators.required],
      asyncValidators: [
        this.checkUserVl.validate.bind(this.checkUserVl)
      ]
    }),
    password: new FormControl(null, Validators.required)
  });

  onSubmit() {
    let username = this.authForm.controls.username.value
    let password = this.authForm.controls.password.value
    this.authSrv.authenticate(username, password);
  }
}
