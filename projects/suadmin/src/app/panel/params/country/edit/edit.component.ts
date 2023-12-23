import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { UtilsService } from 'src/app/utils/utils.service';
import { CountryInterface } from '../country.interface';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  public itemId: string | null = this.route.snapshot.paramMap.get('id');
  public id: number = this.itemId ? parseInt(this.itemId) : 0;

  public country: CountryInterface;

  editForm = new FormGroup({
    id: new FormControl(this.id),
    name: new FormControl('', { validators: Validators.required, nonNullable: true }),
    code: new FormControl(0, { validators: Validators.required, nonNullable: true }),
    alfa2: new FormControl('', { validators: Validators.required, nonNullable: true }),
    alfa3: new FormControl('', { validators: Validators.required, nonNullable: true })
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private countrySrv: CountryService,
    private utilsSrv: UtilsService
  ) {
    this.loadItem(this.id);
  }

  loadItem(id: number) {
    this.countrySrv.getCountry(this.id)
      .subscribe((country: CountryInterface) => {
        this.country = country;

        this.editForm.setValue({
          id: this.id,
          name: country.name? country.name: '',
          code: country.code? country.code: 0,
          alfa2: country.alfa2? country.alfa2: '',
          alfa3: country.alfa3? country.alfa3: ''
        })

      });
  }

  async onSubmit(): Promise<void> {

    if (this.id) {
      let country = {
        id: 0,
        name: this.editForm.controls.name.value,
        code: this.editForm.controls.code.value,
        alfa2: this.editForm.controls.alfa2.value,
        alfa3: this.editForm.controls.alfa3.value
      };

      this.country = await lastValueFrom(this.countrySrv.updateCountry(country, this.id));

      this.utilsSrv.notify('X', 'El registro con el ID: ' + this.country.id + ' ha sido actualizado con éxito');
      this.router.navigate(['country']);
    }
  }

  async delete() {
    await lastValueFrom(this.countrySrv.deleteCountry(this.id));
    this.utilsSrv.notify('X', 'El registro ha sido eliminado con éxito');
    this.router.navigate(['country']);
  }
}
