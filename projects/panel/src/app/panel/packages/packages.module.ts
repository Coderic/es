import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { PackagesRoutingModule } from './packages-routing.module';
import { PackagesComponent } from './packages.component';
import { AddComponent } from './add/add.component';
import { SearchComponent } from './search/search.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PackagesComponent,
    AddComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    PackagesRoutingModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    DatePipe
  ]
})
export class PackagesModule { }
