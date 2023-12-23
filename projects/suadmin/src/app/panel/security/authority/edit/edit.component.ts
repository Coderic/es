import { OnInit, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom, Observable, of } from 'rxjs';
import { UtilsService } from 'src/app/utils/utils.service';
import { UserInterface } from '../../user/user.interface';
import { UserService } from '../../user/user.service';
import { AuthorityInterface } from '../authority.interface';
import { AuthorityService } from '../authority.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  public itemId: string | null = this.route.snapshot.paramMap.get('id');
  public id: number = this.itemId ? parseInt(this.itemId) : 0;
  public users$: Observable<UserInterface[]> = this.userSrv.getUsers();
  public authorities$: Observable<string[]> = of(['GUEST', 'USER', 'MANAGER', 'OPERATOR', 'ADMINISTRATOR', 'SU']);
  public authority: AuthorityInterface;

  editForm = new FormGroup({
    id: new FormControl(this.id),
    username: new FormControl('', { validators: Validators.required }),
    authority: new FormControl('', { validators: Validators.required })
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authoritySrv: AuthorityService,
    private userSrv: UserService,
    private utilsSrv: UtilsService
  ) { }

  ngOnInit() {
    this.authoritySrv.getAuthority(this.id)
    .subscribe((authority) => {
      this.authority = authority;
      this.editForm.controls.username.setValue(this.authority.username);
      this.editForm.controls.authority.setValue(this.authority.authority);
    });
  }

  async onSubmit(): Promise<void> {
    if (this.id) {

      let authority = {
        username: this.editForm.controls.username.value,
        authority: this.editForm.controls.authority.value
      };

      this.authority = await lastValueFrom(this.authoritySrv.updateAuthority(authority, this.id));
      this.utilsSrv.notify('X', 'El registro con el ID: ' + this.authority.id + ' ha sido actualizado con éxito');
      this.router.navigate(['authority']);
    }
  }

  async delete() {
    await lastValueFrom(this.authoritySrv.deleteAuthority(this.id));
    this.utilsSrv.notify('X', 'El registro ha sido eliminado con éxito');
    this.router.navigate(['authority']);
  }
}
