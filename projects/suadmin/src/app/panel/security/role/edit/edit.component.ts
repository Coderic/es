import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom, Observable } from 'rxjs';
import { UtilsService } from 'src/app/utils/utils.service';
import { PermissionInterface } from '../../permission/permission.interface';
import { PermissionService } from '../../permission/permission.service';
import { RoleInterface } from '../role.interface';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  public itemId: string | null = this.route.snapshot.paramMap.get('id');
  public id: number = this.itemId ? parseInt(this.itemId) : 0;
  public permissions$: Observable<PermissionInterface[]> = this.permissionSrv.getPermissions();
  public permissions: PermissionInterface[] = [];

  public role: RoleInterface;

  editForm = new FormGroup({
    id: new FormControl(this.id),
    name: new FormControl('', { validators: Validators.required }),
    role: new FormControl('', { validators: Validators.required }),
    permissions: new FormControl<number[]>([])
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private roleSrv: RoleService,
    private permissionSrv: PermissionService,
    private utilsSrv: UtilsService
  ) { }

  ngOnInit(): void {
    this.permissions$.subscribe((permissions: PermissionInterface[]) => this.permissions = permissions);

    this.roleSrv.getRole(this.id)
      .subscribe((role: RoleInterface) => {
        this.role = role;
        console.dir(role)
        this.editForm.controls.name.setValue(this.role.name)
        this.editForm.controls.role.setValue(this.role.role)
        this.editForm.controls.permissions.setValue(role.permissions.map((x: PermissionInterface) => x.id))
      });
  }

  async onSubmit(): Promise<void> {

    if (this.id) {
      let role = {
        id: this.id,
        name: this.editForm.controls.name.value,
        role: this.editForm.controls.role.value,
        permissions: this.permissions.filter((permission: PermissionInterface) => this.editForm.controls.permissions.value?.indexOf(permission.id) !== -1)
      };
      console.dir(role)
      this.role = await lastValueFrom(this.roleSrv.updateRole(role, this.id));

      this.utilsSrv.notify('X', 'El registro con el ID: ' + this.role.id + ' ha sido actualizado con éxito');
      this.router.navigate(['role']);
      
    }
  }

  async delete() {
    
    await lastValueFrom(this.roleSrv.deleteRole(this.id));
    this.utilsSrv.notify('X', 'El registro ha sido eliminado con éxito');
    this.router.navigate(['role']);
  }
}
