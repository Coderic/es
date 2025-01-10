
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { CheckUserSecurityValidator } from './check-user-security.validator';

@Component({
    selector: 'app-security',
    templateUrl: './security.component.html',
    styleUrls: ['./security.component.css'],
    standalone: false
})
export class SecurityComponent {
  /*
  authForm = new FormGroup({
    username: new FormControl(null, {
      validators: [Validators.required],
      asyncValidators: [
        this.checkUserVl.validate.bind(this.checkUserVl)
      ]
    }),
    password: new FormControl(null, Validators.required)
  });
*/
  constructor(
    private fb: FormBuilder,
    private httpSrv: HttpClient,
    private authSrv: AuthService,
    private checkUserVl: CheckUserSecurityValidator
  ) {
    /*
    if(this.authSrv.checkToken()) {
      this.authSrv.refreshToken();
    }
  
    this.httpSrv.get<any>("http://localhost:8080/api/admin/users")
    .subscribe((data) => console.log(data))
    
    setTimeout(() => {
      authSrv.autenticar('root', 'password');
    }, 3000);
    setTimeout(() => {
      this.httpSrv.get<any>("http://localhost:8080/api/admin/users")
      .subscribe((data) => console.log(data))
    }, 10000);
    setTimeout(() => {
      this.httpSrv.get<any>("http://localhost:8080/api/auth/logout")
      .subscribe((data) => console.log(data))
    }, 15000);
    /api/auth/status
    */
  }

  async onSubmit(): Promise<void> {
    /*
    let username: string | null = this.authForm.controls.username.value;
    let password: string | null = this.authForm.controls.password.value;
    console.dir(await this.authSrv.authenticate(username, password));
    */
  }
}
