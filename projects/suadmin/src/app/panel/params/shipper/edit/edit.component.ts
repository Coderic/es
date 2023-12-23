import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { UtilsService } from 'src/app/utils/utils.service';
import { ShipperInterface } from '../shipper.interface';
import { ShipperService } from '../shipper.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  public itemId: string | null = this.route.snapshot.paramMap.get('id');
  public id: number = this.itemId ? parseInt(this.itemId) : 0;

  public frequencyType: ShipperInterface;

  editForm = new FormGroup({
    id: new FormControl(this.id),
    name: new FormControl('', { validators: Validators.required })
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private frequencyTypeSrv: ShipperService,
    private utilsSrv: UtilsService
  ) {
    this.loadItem(this.id);
  }

  loadItem(id: number) {
    this.frequencyTypeSrv.getShipper(this.id)
      .subscribe((frequencyType) => {
        this.frequencyType = frequencyType;
        this.editForm.controls.name.setValue(this.frequencyType.name)
      });
  }

  async onSubmit(): Promise<void> {

    if (this.id) {
      let frequencyType = {
        name: this.editForm.controls.name.value
      };

      this.frequencyType = await lastValueFrom(this.frequencyTypeSrv.updateShipper(frequencyType, this.id));

      this.utilsSrv.notify('X', 'El registro con el ID: ' + this.frequencyType.id + ' ha sido actualizado con éxito');
      this.router.navigate(['shipper']);
    }
  }

  async delete() {
    await lastValueFrom(this.frequencyTypeSrv.deleteShipper(this.id));
    this.utilsSrv.notify('X', 'El registro ha sido eliminado con éxito');
    this.router.navigate(['shipper']);
  }
}
