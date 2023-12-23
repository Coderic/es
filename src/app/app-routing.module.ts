import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PrepararComponent } from './preparar/preparar.component';
import { SecurityGuard } from './security/security.guard';
import { UserLoginComponent } from './user-login/user-login.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./portal/portal.module').then(m => m.PortalModule), canActivate: [SecurityGuard] },
  { path: 'preparar/:id/:hash', component: PrepararComponent, canActivate: [SecurityGuard] },
  { path: 'login', component: UserLoginComponent },
  { path: 'registrar', component: RegistrarComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }