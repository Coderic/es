import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevelopmentComponent } from './development.component';
import { ContainerComponent } from './container/container.component';

const routes: Routes = [
  {
    path: '', component: ContainerComponent,
    children: [
      {
        path: '', component: DevelopmentComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevelopmentRoutingModule { }
