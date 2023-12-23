import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom, Observable } from 'rxjs';
import { UtilsService } from 'src/app/utils/utils.service';
import { GroupInterface } from '../../group/group.interface';
import { GroupService } from '../../group/group.service';
import { PermissionInterface } from '../../permission/permission.interface';
import { PermissionService } from '../../permission/permission.service';
import { RoleInterface } from '../../role/role.interface';
import { RoleService } from '../../role/role.service';
import { UserInterface } from '../user.interface';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  public itemId: string | null = this.route.snapshot.paramMap.get('id');
  public id: number = this.itemId ? parseInt(this.itemId) : 0;
  public user: UserInterface;
  public groups$: Observable<GroupInterface[]> = this.groupSrv.getGroups();
  public roles$: Observable<RoleInterface[]> = this.roleSrv.getRoles();
  public permissions$: Observable<PermissionInterface[]> = this.permissionSrv.getPermissions();
  public selectedPermissions: PermissionInterface[] = [];
  public permission: PermissionInterface[] = [];
  public groups: GroupInterface[] = [];
  public roles: RoleInterface[] = [];
  public permissions: PermissionInterface[] = [];

  public groupsIds: number[] = [];
  public rolesIds: number[] = [];
  public permissionsIds: number[] = [];

  editForm = new FormGroup({
    id: new FormControl(this.id),
    username: new FormControl('', { validators: Validators.required }),
    password: new FormControl(''),
    enabled: new FormControl(false),
    groups: new FormControl<number[]>([]),
    roles: new FormControl<number[]>([]),
    permissions: new FormControl<number[]>([])
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userSrv: UserService,
    private groupSrv: GroupService,
    private roleSrv: RoleService,
    private permissionSrv: PermissionService,
    private utilsSrv: UtilsService
  ) { }

  ngOnInit() {
    this.groups$.subscribe((groups: GroupInterface[]) => this.groups = groups);
    this.roles$.subscribe((roles: RoleInterface[]) => this.roles = roles);
    this.permissions$.subscribe((permissions: PermissionInterface[]) => this.permissions = permissions);

    this.userSrv.getUser(this.id)
      .subscribe((user: UserInterface) => {
        console.dir(user)
        this.user = user;

        this.editForm.setValue({
          id: this.id,
          username: this.user.username ? this.user.username : null,
          password: this.user.password ? this.user.password : null,
          enabled: this.user.enabled ? this.user.enabled : null,
          groups: this.user.groups.map((x: GroupInterface) => x.id),
          roles: this.user.roles.map((x: RoleInterface) => x.id),
          permissions: this.user.permissions.map((x: PermissionInterface) => x.id),
        })
      });

  }

  async onSubmit(): Promise<void> {
    console.dir(this.editForm.value);

    if (this.id) {

      let user = {
        username: this.editForm.controls.username.value,
        password: this.editForm.controls.password.value,
        enabled: this.editForm.controls.enabled.value,
        roles: this.roles.filter((role: RoleInterface) => this.editForm.controls.roles.value?.indexOf(role.id) !== -1),
        groups: this.groups.filter((group: GroupInterface) => this.editForm.controls.groups.value?.indexOf(group.id) !== -1),
        permissions: this.permissions.filter((permission: PermissionInterface) => this.editForm.controls.permissions.value?.indexOf(permission.id) !== -1)
      };
      
      this.user = await lastValueFrom(this.userSrv.updateUser(user, this.id));
      this.utilsSrv.notify('X', 'El registro con el ID: ' + this.user.id + ' ha sido actualizado con éxito');
      this.router.navigate(['user']);
    }
  }

  async delete() {
    await lastValueFrom(this.userSrv.deleteUser(this.id));
    this.utilsSrv.notify('X', 'El registro ha sido eliminado con éxito');
    this.router.navigate(['user']);
  }
}
