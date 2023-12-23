import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { UtilsService } from 'src/app/utils/utils.service';
import { AccountingGroupInterface } from '../accounting-group.interface';
import { AccountingGroupService } from '../accounting-group.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  createForm = new FormGroup({
    name: new FormControl('', { validators: Validators.required })
  });

  constructor(
    private router: Router,
    private accountingGroupSrv: AccountingGroupService,
    private utilsSrv: UtilsService
  ) { }
  

  async onSubmit(): Promise<void> {
    let accountingGroup: AccountingGroupInterface = await lastValueFrom(this.accountingGroupSrv.createAccountingGroup({
      name: this.createForm.controls.name.value
    }));
    this.utilsSrv.notify('X', 'El registro ha sido creado con éxito con el ID: ' + accountingGroup.id);
    this.router.navigate(['accounting-group']);
  }
}
