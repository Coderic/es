import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResourceGuard } from 'src/app/security/resource.guard';
import { SecurityGuard } from 'src/app/security/security.guard';
import { ManagerComponent } from './manager/manager.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SuGuard } from 'src/app/security/su.guard';

const routes: Routes = [
  { path: '', loadChildren: () => import('./panel/panel.module').then(m => m.PanelModule), canActivate: [SecurityGuard, SuGuard], canActivateChild: [ResourceGuard] },
  { path: 'login', component: ManagerComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
