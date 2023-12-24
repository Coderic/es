import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PrepararComponent } from './preparar/preparar.component';
import { SecurityGuard } from './security/security.guard';
import { UserLoginComponent } from './user-login/user-login.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { AppComponent } from './app.component';

import {
  AngularFireAuthGuard,
  hasCustomClaim,
  redirectUnauthorizedTo,
  redirectLoggedInTo,
} from '@angular/fire/compat/auth-guard';

const adminOnly = () => hasCustomClaim('admin');
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToItems = () => redirectLoggedInTo(['dashboard']);
//const belongsToAccount = (next) => hasCustomClaim(`account-${next.params.id}`)

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./portal/portal.module').then((m) => m.PortalModule),
//    canActivate: [AngularFireAuthGuard],
//    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: 'login',
    component: UserLoginComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedInToItems },
  },
  { path: 'registrar', component: RegistrarComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
