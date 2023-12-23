import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom, Observable } from 'rxjs';
import { UtilsService } from 'src/app/utils/utils.service';
import { PermissionInterface } from '../../permission/permission.interface';
import { PermissionService } from '../../permission/permission.service';
import { RoleInterface } from '../../role/role.interface';
import { RoleService } from '../../role/role.service';
import { GroupInterface } from '../group.interface';
import { GroupService } from '../group.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  public itemId: string | null = this.route.snapshot.paramMap.get('id');
  public id: number = this.itemId ? parseInt(this.itemId) : 0;

  public roles$: Observable<RoleInterface[]> = this.roleSrv.getRoles()
  public permissions$: Observable<PermissionInterface[]> = this.permissionSrv.getPermissions();

  public group: GroupInterface;

  editForm = new FormGroup({
    id: new FormControl(this.id),
    groupName: new FormControl('', { validators: Validators.required }),
    roles: new FormControl(),
    privileges: new FormControl()
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private groupSrv: GroupService,
    private roleSrv: RoleService,
    private permissionSrv: PermissionService,
    private utilsSrv: UtilsService
  ) {
    this.loadItem(this.id);
  }

  loadItem(id: number) {
    this.groupSrv.getGroup(this.id)
      .subscribe((group) => {
        this.group = group;
        this.editForm.controls.groupName.setValue(this.group.groupName)
      });
  }

  async onSubmit(): Promise<void> {

    if (this.id) {
      let group = {
        id: 0,
        groupName: this.editForm.controls.groupName.value
      };

      this.group = await lastValueFrom(this.groupSrv.updateGroup(group, this.id));

      this.utilsSrv.notify('X', 'El registro con el ID: ' + this.group.id + ' ha sido actualizado con éxito');
      this.router.navigate(['group']);
    }
  }

  async delete() {
    await lastValueFrom(this.groupSrv.deleteGroup(this.id));
    this.utilsSrv.notify('X', 'El registro ha sido eliminado con éxito');
    this.router.navigate(['group']);
  }
}
