import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { UtilsService } from 'src/app/utils/utils.service';
import { RemiteeInterface } from '../remitee.interface';
import { RemiteeService } from '../remitee.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  public itemId: string | null = this.route.snapshot.paramMap.get('id');
  public id: number = this.itemId ? parseInt(this.itemId) : 0;

  public projectType: RemiteeInterface;

  editForm = new FormGroup({
    id: new FormControl(this.id),
    name: new FormControl('', { validators: Validators.required })
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectTypeSrv: RemiteeService,
    private utilsSrv: UtilsService
  ) {
    this.loadItem(this.id);
  }

  loadItem(id: number) {
    this.projectTypeSrv.getRemitee(this.id)
      .subscribe((projectType) => {
        this.projectType = projectType;
        this.editForm.controls.name.setValue(this.projectType.name)
      });
  }

  async onSubmit(): Promise<void> {

    if (this.id) {
      let projectType = {
        name: this.editForm.controls.name.value
      };

      this.projectType = await lastValueFrom(this.projectTypeSrv.updateRemitee(projectType, this.id));

      this.utilsSrv.notify('X', 'El registro con el ID: ' + this.projectType.id + ' ha sido actualizado con éxito');
      this.router.navigate(['remitee']);
    }
  }

  async delete() {
    await lastValueFrom(this.projectTypeSrv.deleteRemitee(this.id));
    this.utilsSrv.notify('X', 'El registro ha sido eliminado con éxito');
    this.router.navigate(['remitee']);
  }
}
