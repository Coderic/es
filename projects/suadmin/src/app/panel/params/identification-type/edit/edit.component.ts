import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { UtilsService } from 'src/app/utils/utils.service';
import { IdentificationTypeInterface } from '../identification-type.interface';
import { IdentificationTypeService } from '../identification-type.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  public itemId: string | null = this.route.snapshot.paramMap.get('id');
  public id: number = this.itemId ? parseInt(this.itemId) : 0;

  public identificationType: IdentificationTypeInterface;

  editForm = new FormGroup({
    id: new FormControl(this.id),
    name: new FormControl('', { validators: Validators.required })
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private identificationTypeSrv: IdentificationTypeService,
    private utilsSrv: UtilsService
  ) {
    this.loadItem(this.id);
  }

  loadItem(id: number) {
    this.identificationTypeSrv.getIdentificationType(this.id)
      .subscribe((identificationType) => {
        this.identificationType = identificationType;
        this.editForm.controls.name.setValue(this.identificationType.name)
      });
  }

  async onSubmit(): Promise<void> {

    if (this.id) {
      let identificationType = {
        name: this.editForm.controls.name.value
      };

      this.identificationType = await lastValueFrom(this.identificationTypeSrv.updateIdentificationType(identificationType, this.id));

      this.utilsSrv.notify('X', 'El registro con el ID: ' + this.identificationType.id + ' ha sido actualizado con éxito');
      this.router.navigate(['identification-type']);
    }
  }

  async delete() {
    await lastValueFrom(this.identificationTypeSrv.deleteIdentificationType(this.id));
    this.utilsSrv.notify('X', 'El registro ha sido eliminado con éxito');
    this.router.navigate(['identification-type']);
  }
}
