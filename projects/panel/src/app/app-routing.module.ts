import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from 'src/app/security/admin.guard';
import { ResourceGuard } from 'src/app/security/resource.guard';
import { SecurityGuard } from 'src/app/security/security.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./panel/panel.module').then(m => m.PanelModule), canActivate: [SecurityGuard, AdminGuard], canActivateChild: [ResourceGuard] },
  { path: 'login', component: AuthComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
