import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { UtilsService } from 'src/app/utils/utils.service';
import { ContractTypeInterface } from '../contract-type.interface';
import { ContractTypeService } from '../contract-type.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  public itemId: string | null = this.route.snapshot.paramMap.get('id');
  public id: number = this.itemId ? parseInt(this.itemId) : 0;

  public contractType: ContractTypeInterface;

  editForm = new FormGroup({
    id: new FormControl(this.id),
    name: new FormControl('', { validators: Validators.required })
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contractTypeSrv: ContractTypeService,
    private utilsSrv: UtilsService
  ) {
    this.loadItem(this.id);
  }

  loadItem(id: number) {
    this.contractTypeSrv.getContractType(this.id)
      .subscribe((contractType) => {
        this.contractType = contractType;
        this.editForm.controls.name.setValue(this.contractType.name)
      });
  }

  async onSubmit(): Promise<void> {

    if (this.id) {
      let contractType = {
        name: this.editForm.controls.name.value
      };

      this.contractType = await lastValueFrom(this.contractTypeSrv.updateContractType(contractType, this.id));

      this.utilsSrv.notify('X', 'El registro con el ID: ' + this.contractType.id + ' ha sido actualizado con éxito');
      this.router.navigate(['contract-type']);
    }
  }

  async delete() {
    await lastValueFrom(this.contractTypeSrv.deleteContractType(this.id));
    this.utilsSrv.notify('X', 'El registro ha sido eliminado con éxito');
    this.router.navigate(['contract-type']);
  }
}
