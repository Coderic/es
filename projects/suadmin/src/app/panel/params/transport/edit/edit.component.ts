import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { UtilsService } from 'src/app/utils/utils.service';
import { TransportInterface } from '../transport.interface';
import { TransportService } from '../transport.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  public itemId: string | null = this.route.snapshot.paramMap.get('id');
  public id: number = this.itemId ? parseInt(this.itemId) : 0;

  public documentType: TransportInterface;

  editForm = new FormGroup({
    id: new FormControl(this.id),
    name: new FormControl('', { validators: Validators.required })
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private documentTypeSrv: TransportService,
    private utilsSrv: UtilsService
  ) {
    this.loadItem(this.id);
  }

  loadItem(id: number) {
    this.documentTypeSrv.getTransport(this.id)
      .subscribe((documentType) => {
        this.documentType = documentType;
        this.editForm.controls.name.setValue(this.documentType.name)
      });
  }

  async onSubmit(): Promise<void> {

    if (this.id) {
      let documentType = {
        name: this.editForm.controls.name.value
      };

      this.documentType = await lastValueFrom(this.documentTypeSrv.updateTransport(documentType, this.id));

      this.utilsSrv.notify('X', 'El registro con el ID: ' + this.documentType.id + ' ha sido actualizado con éxito');
      this.router.navigate(['transport']);
    }
  }

  async delete() {
    await lastValueFrom(this.documentTypeSrv.deleteTransport(this.id));
    this.utilsSrv.notify('X', 'El registro ha sido eliminado con éxito');
    this.router.navigate(['transport']);
  }
}
