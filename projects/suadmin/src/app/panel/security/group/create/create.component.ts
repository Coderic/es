import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs'; 
import { UtilsService } from 'src/app/utils/utils.service';
import { GroupInterface } from '../group.interface';
import { GroupService } from '../group.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {

  createForm = new FormGroup({
    groupName: new FormControl('', { validators: Validators.required })
  });

  constructor(
    private router: Router,
    private groupSrv: GroupService,
    private utilsSrv: UtilsService
  ) { }
  

  async onSubmit(): Promise<void> {
    
    let group: GroupInterface = await lastValueFrom(this.groupSrv.createGroup({
      id: 0,
      groupName: this.createForm.controls.groupName.value
    }));

    this.utilsSrv.notify('X', 'El registro ha sido creado con éxito con el ID: ' + group.id);
    this.router.navigate(['group']);
  }
}
