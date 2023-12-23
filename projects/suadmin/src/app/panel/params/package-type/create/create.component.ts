import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { UtilsService } from 'src/app/utils/utils.service';
import { PackageTypeInterface } from '../package-type.interface';
import { PackageTypeService } from '../package-type.service';

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
    private ruleTypeSrv: PackageTypeService,
    private utilsSrv: UtilsService
  ) { }
  

  async onSubmit(): Promise<void> {
    let ruleType: PackageTypeInterface = await lastValueFrom(this.ruleTypeSrv.createPackageType({
      name: this.createForm.controls.name.value
    }));
    this.utilsSrv.notify('X', 'El registro ha sido creado con éxito con el ID: ' + ruleType.id);
    this.router.navigate(['package-type']);
  }
}
