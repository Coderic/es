import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { UtilsService } from 'src/app/utils/utils.service';
import { PackageTypeInterface } from '../package-type.interface';
import { PackageTypeService } from '../package-type.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  public itemId: string | null = this.route.snapshot.paramMap.get('id');
  public id: number = this.itemId ? parseInt(this.itemId) : 0;

  public ruleType: PackageTypeInterface;

  editForm = new FormGroup({
    id: new FormControl(this.id),
    name: new FormControl('', { validators: Validators.required })
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ruleTypeSrv: PackageTypeService,
    private utilsSrv: UtilsService
  ) {
    this.loadItem(this.id);
  }

  loadItem(id: number) {
    this.ruleTypeSrv.getPackageType(this.id)
      .subscribe((ruleType) => {
        this.ruleType = ruleType;
        this.editForm.controls.name.setValue(this.ruleType.name)
      });
  }

  async onSubmit(): Promise<void> {

    if (this.id) {
      let ruleType = {
        name: this.editForm.controls.name.value
      };

      this.ruleType = await lastValueFrom(this.ruleTypeSrv.updatePackageType(ruleType, this.id));

      this.utilsSrv.notify('X', 'El registro con el ID: ' + this.ruleType.id + ' ha sido actualizado con éxito');
      this.router.navigate(['package-type']);
    }
  }

  async delete() {
    await lastValueFrom(this.ruleTypeSrv.deletePackageType(this.id));
    this.utilsSrv.notify('X', 'El registro ha sido eliminado con éxito');
    this.router.navigate(['package-type']);
  }
}
