import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { UtilsService } from 'src/app/utils/utils.service';
import { IdentificationTypeInterface } from '../identification-type.interface';
import { IdentificationTypeService } from '../identification-type.service';

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
    private identificationTypeSrv: IdentificationTypeService,
    private utilsSrv: UtilsService
  ) { }


  async onSubmit(): Promise<void> {
    let identificationType: IdentificationTypeInterface = await lastValueFrom(this.identificationTypeSrv.createIdentificationType({
      name: this.createForm.controls.name.value
    }));
    this.utilsSrv.notify('X', 'El registro ha sido creado con éxito con el ID: ' + identificationType.id);
    this.router.navigate(['identification-type']);
  }
}
