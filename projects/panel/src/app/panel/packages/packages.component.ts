import { AfterViewInit, Component, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { PanelService } from '../panel.service';
import { PackageInterface } from '../panel.interface';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements AfterViewInit {
  public packages$: Observable<PackageInterface[]> = this.panelSrv.getPackages();

  public dtOptions = {
    language: {
      url: './assets/es-ES.json'
    },
    processing: true,
    ajax: (dataTablesParameters: any, callback: any) => {
      console.dir(dataTablesParameters)
      this.packages$.subscribe((packages: PackageInterface[]) =>
        callback({
          recordsTotal: packages.length,
          recordsFiltered: packages.length,
          data: packages
        }));
    },
    columns: [
      {
        title: 'ID',
        data: 'id'
      },
      {
        title: 'Fecha',
        data: 'fecha',
        ngPipeInstance: this.pipeDateSrv,
        ngPipeArgs: ['d/MM/yyyy  h:mm a', 'es_VE']
      },
      {
        title: 'Consignatario',
        data: 'remittee',
        render: function ( data: any, type: any, row:any ) {
          return data.nombres +' '+ data.apellidos;
        }
      },
      {
        title: 'Recibo',
        data: 'recibo'
      },
      {
        title: 'Medidas',
        data: null,
        render: function ( data: any, type: any, row:any ) {
          return data.ancho +'X'+ data.alto +'X'+ data.largo;
        }
      },
      {
        title: 'Peso',
        data: 'peso'
      },
      {
        title: 'Fotos',
        data: null,
        render: function (data: any, type: any, full: any) {
          return '<button type="button" data-bs-id="'+data.id+'" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#gallery"><i class="bi bi-camera" data-bs-id="'+data.id+'"></i></button>';
        }
      },
      {
        title: 'Transporte',
        data: null,
        render: function (data: any, type: any, full: any) {
          return '<button type="button" data-id="'+data.id+'" class="btn btn-success"><i data-id="'+data.id+'" class="bi bi-airplane-engines"></i></button>';
        }
      }
    ],
    dom: 'Bfrtip',
    buttons: [
      'excel', 'pdf'
    ]
  };

  constructor(
    private panelSrv: PanelService,
    private pipeDateSrv: DatePipe,
    private renderer: Renderer2
  ) { }

  ngAfterViewInit(): void {
    this.renderer.listen('document', 'click', (event) => {
      if (event.target.hasAttribute("data-bs-id")) {
        let value = event.target.getAttribute("data-bs-id");
        console.dir(value)
      }
      if (event.target.hasAttribute("data-id")) {
        let value = event.target.getAttribute("data-id");
        
      }
    });
  }
}
