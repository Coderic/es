import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { UtilsService } from 'src/app/utils/utils.service';
import { PermissionInterface } from '../permission.interface';
import { PermissionService } from '../permission.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  public itemId: string | null = this.route.snapshot.paramMap.get('id');
  public id: number = this.itemId ? parseInt(this.itemId) : 0;

  public permission: PermissionInterface;

  editForm = new FormGroup({
    id: new FormControl(this.id),
    name: new FormControl('', { validators: Validators.required, nonNullable: true }),
    privilege: new FormControl('', { validators: Validators.required, nonNullable: true }),
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private permissionSrv: PermissionService,
    private utilsSrv: UtilsService
  ) {
    this.loadItem(this.id);
  }

  loadItem(id: number) {
    this.permissionSrv.getPermission(this.id)
      .subscribe((permission: PermissionInterface) => {
        this.permission = permission;
        this.editForm.setValue({
          id: this.id,
          name: permission.name ? permission.name : '',
          privilege: permission.privilege ? permission.privilege : ''
        })
      });
  }

  async onSubmit(): Promise<void> {

    if (this.id) {
      let permission = {
        id: 0,
        name: this.editForm.controls.name.value,
        privilege: this.editForm.controls.privilege.value
      };

      this.permission = await lastValueFrom(this.permissionSrv.updatePermission(permission, this.id));

      this.utilsSrv.notify('X', 'El registro con el ID: ' + this.permission.id + ' ha sido actualizado con éxito');
      this.router.navigate(['permission']);
    }
  }

  async delete() {
    await lastValueFrom(this.permissionSrv.deletePermission(this.id));
    this.utilsSrv.notify('X', 'El registro ha sido eliminado con éxito');
    this.router.navigate(['permission']);
  }
}
