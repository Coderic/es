import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PackagesComponent } from './packages.component';
import { AddComponent } from './add/add.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: '', component: PackagesComponent }, 
  { path: 'recibir', component: AddComponent }, 
  { path: 'buscar', component: SearchComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PackagesRoutingModule { }
