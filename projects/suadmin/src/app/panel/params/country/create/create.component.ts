import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { UtilsService } from 'src/app/utils/utils.service';
import { CountryInterface } from '../country.interface';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {

  createForm = new FormGroup({
    name: new FormControl(null, { validators: Validators.required }),
    code: new FormControl(null, { validators: Validators.required }),
    alfa2: new FormControl(null, { validators: Validators.required }),
    alfa3: new FormControl(null, { validators: Validators.required })
  });

  constructor(
    private router: Router,
    private countrySrv: CountryService,
    private utilsSrv: UtilsService
  ) { }


  async onSubmit(): Promise<void> {
    
    if (this.createForm.valid) {
      let request = {
        id: 0,
        name: this.createForm.controls.name.value,
        code: this.createForm.controls.code.value,
        alfa2: this.createForm.controls.alfa2.value,
        alfa3: this.createForm.controls.alfa3.value
      }

      let country: CountryInterface = await lastValueFrom(this.countrySrv.createCountry(request));
      this.utilsSrv.notify('X', 'El registro ha sido creado con éxito con el ID: ' + country.id);
      this.router.navigate(['country']);
    }
  }
}
