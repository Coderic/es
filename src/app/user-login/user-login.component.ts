import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CheckUserSecurityValidator } from '../security/check-user-security.validator';
import { AuthService } from '../security/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-user-login',
    templateUrl: './user-login.component.html',
    styleUrls: ['./user-login.component.css'],
    standalone: false
})
export class UserLoginComponent {
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
