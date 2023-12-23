import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { UtilsService } from 'src/app/utils/utils.service';
import { CurrencyTypeInterface } from '../currency-type.interface';
import { CurrencyTypeService } from '../currency-type.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {

  createForm = new FormGroup({
    code: new FormControl('', {
      validators: [
        Validators.required,
        Validators.maxLength(3),
        Validators.minLength(3)
      ]
    }),
    name: new FormControl('', { validators: Validators.required })
  });

  constructor(
    private router: Router,
    private currencyTypeSrv: CurrencyTypeService,
    private utilsSrv: UtilsService
  ) { }


  async onSubmit(): Promise<void> {
    let currencyType: CurrencyTypeInterface = await lastValueFrom(this.currencyTypeSrv.createCurrencyType({
      code: this.createForm.controls.code.value,
      name: this.createForm.controls.name.value
    }));
    this.utilsSrv.notify('X', 'El registro ha sido creado con éxito con el ID: ' + currencyType.id);
    this.router.navigate(['currency-type']);
  }
}
