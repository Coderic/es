import { Directive, Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { catchError, map, Observable, of } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class CheckUserSecurityValidator implements AsyncValidator {

  constructor(private authSrv: AuthService) { }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    let username = control.value
    console.dir(control.value);
    return this.authSrv.checkUserExist(username)
      .pipe(
        map(result => (!result ? { userExists: true } : null)),
        catchError(() => of(null))
      );
  }
}
