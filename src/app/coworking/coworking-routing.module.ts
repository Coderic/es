import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoworkingComponent } from './coworking.component';
import { ContainerComponent } from './container/container.component';


const routes: Routes = [
  {
    path: '', component: ContainerComponent,
    children: [
      {
        path: '', component: CoworkingComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoworkingRoutingModule { }
