import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { UtilsService } from 'src/app/utils/utils.service';
import { AccountingGroupInterface } from '../accounting-group.interface';
import { AccountingGroupService } from '../accounting-group.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  public itemId: string | null = this.route.snapshot.paramMap.get('id');
  public id: number = this.itemId ? parseInt(this.itemId) : 0;

  public accountingGroup: AccountingGroupInterface;

  editForm = new FormGroup({
    id: new FormControl(this.id),
    name: new FormControl('', { validators: Validators.required })
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private accountingGroupSrv: AccountingGroupService,
    private utilsSrv: UtilsService
  ) {
    this.loadItem(this.id);
  }

  loadItem(id: number) {
    this.accountingGroupSrv.getAccountingGroup(this.id)
      .subscribe((accountingGroup) => {
        this.accountingGroup = accountingGroup;
        this.editForm.controls.name.setValue(this.accountingGroup.name)
      });
  }

  async onSubmit(): Promise<void> {

    if (this.id) {
      let accountingGroup = {
        name: this.editForm.controls.name.value
      };

      this.accountingGroup = await lastValueFrom(this.accountingGroupSrv.updateAccountingGroup(accountingGroup, this.id));

      this.utilsSrv.notify('X', 'El registro con el ID: ' + this.accountingGroup.id + ' ha sido actualizado con éxito');
      this.router.navigate(['accounting-group']);
    }
  }

  async delete() {
    await lastValueFrom(this.accountingGroupSrv.deleteAccountingGroup(this.id));
    this.utilsSrv.notify('X', 'El registro ha sido eliminado con éxito');
    this.router.navigate(['accounting-group']);
  }
}
