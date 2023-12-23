import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalComponent } from './portal.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { SecurityGuard } from '../security/security.guard';
import { PrepararComponent } from '../preparar/preparar.component';


const routes: Routes = [
  {
    path: '', component: PortalComponent,
    children: [
      { path: '', component: DashboardComponent, canActivate: [SecurityGuard] },
      { path: 'preparar/:id/:hash', component: PrepararComponent, canActivate: [SecurityGuard] }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalRoutingModule { }
