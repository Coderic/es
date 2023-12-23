import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { UtilsService } from 'src/app/utils/utils.service';
import { ShipperInterface } from '../shipper.interface';
import { ShipperService } from '../shipper.service';

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
    private frequencyTypeSrv: ShipperService,
    private utilsSrv: UtilsService
  ) { }
  

  async onSubmit(): Promise<void> {
    let frequencyType: ShipperInterface = await lastValueFrom(this.frequencyTypeSrv.createShipper({
      name: this.createForm.controls.name.value
    }));
    this.utilsSrv.notify('X', 'El registro ha sido creado con éxito con el ID: ' + frequencyType.id);
    this.router.navigate(['shipper']);
  }
}
