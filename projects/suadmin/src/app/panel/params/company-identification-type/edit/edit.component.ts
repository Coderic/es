import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { UtilsService } from 'src/app/utils/utils.service';
import { CompanyIdentificationTypeInterface } from '../company-identification-type.interface';
import { CompanyIdentificationTypeService } from '../company-identification-type.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  public itemId: string | null = this.route.snapshot.paramMap.get('id');
  public id: number = this.itemId ? parseInt(this.itemId) : 0;

  public companyIdentificationType: CompanyIdentificationTypeInterface;

  editForm = new FormGroup({
    id: new FormControl(this.id),
    name: new FormControl('', { validators: Validators.required })
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private companyIdentificationTypeSrv: CompanyIdentificationTypeService,
    private utilsSrv: UtilsService
  ) {
    this.loadItem(this.id);
  }

  loadItem(id: number) {
    this.companyIdentificationTypeSrv.getCompanyIdentificationType(this.id)
      .subscribe((companyIdentificationType) => {
        this.companyIdentificationType = companyIdentificationType;
        this.editForm.controls.name.setValue(this.companyIdentificationType.name)
      });
  }

  async onSubmit(): Promise<void> {

    if (this.id) {
      let companyIdentificationType = {
        name: this.editForm.controls.name.value
      };

      this.companyIdentificationType = await lastValueFrom(this.companyIdentificationTypeSrv.updateCompanyIdentificationType(companyIdentificationType, this.id));

      this.utilsSrv.notify('X', 'El registro con el ID: ' + this.companyIdentificationType.id + ' ha sido actualizado con éxito');
      this.router.navigate(['company-identification-type']);
    }
  }

  async delete() {
    await lastValueFrom(this.companyIdentificationTypeSrv.deleteCompanyIdentificationType(this.id));
    this.utilsSrv.notify('X', 'El registro ha sido eliminado con éxito');
    this.router.navigate(['company-identification-type']);
  }
}
