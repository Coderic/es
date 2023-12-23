import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PanelComponent } from './panel.component';
import { ConsignatarioComponent } from './consignatario/consignatario.component';


const routes: Routes = [
  {
    path: '', component: PanelComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'consignatario', component: ConsignatarioComponent },
      { path: 'paquetes', loadChildren: () => import('./packages/packages.module').then(m => m.PackagesModule) },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelRoutingModule { }
