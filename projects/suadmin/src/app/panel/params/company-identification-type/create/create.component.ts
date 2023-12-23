import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { UtilsService } from 'src/app/utils/utils.service';
import { CompanyIdentificationTypeInterface } from '../company-identification-type.interface';
import { CompanyIdentificationTypeService } from '../company-identification-type.service';

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
    private companyIdentificationTypeSrv: CompanyIdentificationTypeService,
    private utilsSrv: UtilsService
  ) { }
  

  async onSubmit(): Promise<void> {
    let companyIdentificationType: CompanyIdentificationTypeInterface = await lastValueFrom(this.companyIdentificationTypeSrv.createCompanyIdentificationType({
      name: this.createForm.controls.name.value
    }));
    this.utilsSrv.notify('X', 'El registro ha sido creado con éxito con el ID: ' + companyIdentificationType.id);
    this.router.navigate(['company-identification-type']);
  }
}
