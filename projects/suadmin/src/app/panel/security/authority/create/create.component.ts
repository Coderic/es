import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { lastValueFrom, Observable, of } from 'rxjs';
import { UtilsService } from 'src/app/utils/utils.service';
import { UserInterface } from '../../user/user.interface';
import { UserService } from '../../user/user.service';
import { AuthorityInterface } from '../authority.interface';
import { AuthorityService } from '../authority.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  public users$: Observable<UserInterface[]> = this.userSrv.getUsers();
  public authorities$: Observable<string[]> = of(['GUEST', 'USER', 'MANAGER', 'OPERATOR', 'ADMINISTRATOR', 'SU']);

  createForm = new FormGroup({
    username: new FormControl('', { validators: Validators.required }),
    authority: new FormControl('', { validators: Validators.required })
  });

  constructor(
    private router: Router,
    private authoritySrv: AuthorityService,
    private userSrv: UserService,
    private utilsSrv: UtilsService
  ) { }
  

  async onSubmit(): Promise<void> {
    
    let authority: AuthorityInterface = await lastValueFrom(this.authoritySrv.createAuthority({
      username: this.createForm.controls.username.value,
      authority: this.createForm.controls.authority.value
    }));

    this.utilsSrv.notify('X', 'El registro ha sido creado con éxito con el ID: ' + authority.id);
    this.router.navigate(['authority']);
  }
}
