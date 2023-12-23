import { Component } from '@angular/core';
import { PanelService } from '../../panel.service';
import { Observable, lastValueFrom } from 'rxjs';
import { PackageInterface, PackageTypeInterface, RemitteeInterface, ShipperInterface } from '../../panel.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  public packageTypes$: Observable<PackageTypeInterface[]> = this.panelSrv.getPackageTypes();
  public shippers$: Observable<ShipperInterface[]> = this.panelSrv.getShippers();
  public senders$: Observable<RemitteeInterface[]> = this.panelSrv.getSenders();
  public fileName = '';
  public selectedFile: File | null = null;

  public createForm = new FormGroup({
      remittee_id: new FormControl<number>(0, { validators: Validators.required }),
      shipper_id: new FormControl<number>(0, { validators: Validators.required }),
      packageType_id: new FormControl<number>(0, { validators: Validators.required }),
      fecha: new FormControl<Date|string|null>(new Date(), { validators: Validators.required }),
      recibo: new FormControl('', { validators: Validators.required }),
      alto: new FormControl<number>(0, { validators: Validators.required }),
      ancho: new FormControl<number>(0, { validators: Validators.required }),
      largo: new FormControl<number>(0, { validators: Validators.required }),
      peso: new FormControl<number>(0, { validators: Validators.required }),
      tracking: new FormControl('', { validators: Validators.required }),
      notas: new FormControl(''),
      files: new FormControl(),
  });

  constructor(private panelSrv: PanelService, private router: Router) {
    this.createForm.valueChanges.subscribe((value) => console.dir(value))
  }

  onFileSelected(event: any) {
    console.dir(event)
    this.selectedFile = event.target.files[0];

    if (this.selectedFile) {

      this.fileName = this.selectedFile.name;

        const upload$ = this.panelSrv.uploadFile(this.selectedFile);

        upload$.subscribe(res => {
          console.log(res);
          alert('File uploaded successfully.');
        });
        
    }
}

  async onSubmit(): Promise<void> {
    //let city: CityInterface = ;city
    //let city_id = this.createForm.controls.city_id.value ? this.createForm.controls.city_id.value: 0;

    let remittee_id = this.createForm.controls.remittee_id.value ? this.createForm.controls.remittee_id.value: 0;
    let remittee: RemitteeInterface = await lastValueFrom(this.panelSrv.getRemittee(remittee_id));

    let shipper_id = this.createForm.controls.shipper_id.value ? this.createForm.controls.shipper_id.value: 0;
    let shipper: ShipperInterface = await lastValueFrom(this.panelSrv.getShipper(shipper_id));

    let packageType_id = this.createForm.controls.packageType_id.value ? this.createForm.controls.packageType_id.value: 0;
    let packageType: PackageTypeInterface = await lastValueFrom(this.panelSrv.getPackageType(packageType_id));

    let aPackage: PackageInterface = await lastValueFrom(this.panelSrv.createPackage({
      id: 0,
      remittee: remittee,
      shipper: shipper,
      transport: null,
      packageType: packageType,
      fecha: this.createForm.controls.fecha.value ? this.createForm.controls.fecha.value: new Date(),
      recibo: this.createForm.controls.recibo.value ? this.createForm.controls.recibo.value: "",
      alto: this.createForm.controls.alto.value ? this.createForm.controls.alto.value: 0,
      ancho: this.createForm.controls.ancho.value ? this.createForm.controls.ancho.value: 0,
      largo: this.createForm.controls.largo.value ? this.createForm.controls.largo.value: 0,
      peso: this.createForm.controls.peso.value ? this.createForm.controls.peso.value: 0,
      tracking: this.createForm.controls.tracking.value ? this.createForm.controls.tracking.value: "",
      notas: this.createForm.controls.notas.value ? this.createForm.controls.notas.value: ""
    }));

    alert('Se ha registrado paquete correctamente')
    this.router.navigate(['/paquetes']);
  }
}
