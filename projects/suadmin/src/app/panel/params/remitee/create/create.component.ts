import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { UtilsService } from 'src/app/utils/utils.service';
import { RemiteeInterface } from '../remitee.interface';
import { RemiteeService } from '../remitee.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  createForm = new FormGroup({
    name: new FormControl('', { validators: Validators.required })
  });

  constructor(
    private router: Router,
    private projectTypeSrv: RemiteeService,
    private utilsSrv: UtilsService
  ) { }
  

  async onSubmit(): Promise<void> {
    let projectType: RemiteeInterface = await lastValueFrom(this.projectTypeSrv.createRemitee({
      name: this.createForm.controls.name.value
    }));
    this.utilsSrv.notify('X', 'El registro ha sido creado con éxito con el ID: ' + projectType.id);
    this.router.navigate(['remitee']);
  }
}
