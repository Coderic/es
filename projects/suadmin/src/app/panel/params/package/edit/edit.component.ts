import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { UtilsService } from 'src/app/utils/utils.service';
import { PackageInterface } from '../package.interface';
import { PackageService } from '../package.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  public itemId: string | null = this.route.snapshot.paramMap.get('id');
  public id: number = this.itemId ? parseInt(this.itemId) : 0;

  public package: PackageInterface;

  editForm = new FormGroup({
    id: new FormControl(this.id),
    name: new FormControl('', { validators: Validators.required })
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private packageSrv: PackageService,
    private utilsSrv: UtilsService
  ) {
    this.loadItem(this.id);
  }

  loadItem(id: number) {
    this.packageSrv.getPackage(this.id)
      .subscribe((ePackage: PackageInterface) => {
        this.package = ePackage;
        this.editForm.controls.name.setValue(this.package.name)
      });
  }

  async onSubmit(): Promise<void> {

    if (this.id) {
      let ePackage = {
        name: this.editForm.controls.name.value
      };

      this.package = await lastValueFrom(this.packageSrv.updatePackage(ePackage, this.id));

      this.utilsSrv.notify('X', 'El registro con el ID: ' + this.package.id + ' ha sido actualizado con éxito');
      this.router.navigate(['package']);
    }
  }

  async delete() {
    await lastValueFrom(this.packageSrv.deletePackage(this.id));
    this.utilsSrv.notify('X', 'El registro ha sido eliminado con éxito');
    this.router.navigate(['package']);
  }
}
