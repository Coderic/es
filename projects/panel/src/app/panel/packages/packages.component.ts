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
