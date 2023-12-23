import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { UtilsService } from 'src/app/utils/utils.service';
import { CurrencyTypeInterface } from '../currency-type.interface';
import { CurrencyTypeService } from '../currency-type.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  public itemId: string | null = this.route.snapshot.paramMap.get('id');
  public id: number = this.itemId ? parseInt(this.itemId) : 0;

  public currencyType: CurrencyTypeInterface;

  editForm = new FormGroup({
    id: new FormControl(this.id),
    code: new FormControl('', { validators: Validators.required }),
    name: new FormControl('', { validators: Validators.required })
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private currencyTypeSrv: CurrencyTypeService,
    private utilsSrv: UtilsService
  ) {
    this.loadItem(this.id);
  }

  loadItem(id: number) {
    this.currencyTypeSrv.getCurrencyType(this.id)
      .subscribe((currencyType) => {
        this.currencyType = currencyType;
        this.editForm.controls.code.setValue(this.currencyType.code)
        this.editForm.controls.name.setValue(this.currencyType.name)
      });
  }

  async onSubmit(): Promise<void> {

    if (this.id) {
      let currencyType = {
        name: this.editForm.controls.name.value,
        code: this.editForm.controls.code.value
      };

      this.currencyType = await lastValueFrom(this.currencyTypeSrv.updateCurrencyType(currencyType, this.id));

      this.utilsSrv.notify('X', 'El registro con el ID: ' + this.currencyType.id + ' ha sido actualizado con éxito');
      this.router.navigate(['currency-type']);
    }
  }

  async delete() {
    await lastValueFrom(this.currencyTypeSrv.deleteCurrencyType(this.id));
    this.utilsSrv.notify('X', 'El registro ha sido eliminado con éxito');
    this.router.navigate(['currency-type']);
  }
}
