import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './account/dashboard/dashboard.component';
import { SecurityGuard } from './security/security.guard';
import { UserLoginComponent } from './user-login/user-login.component';
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
  },
  {
    path: 'development',
    loadChildren: () =>
      import('./development/development.module').then(
        (m) => m.DevelopmentModule
      ),
  },
  {
    path: 'crowdfunding',
    loadChildren: () =>
      import('./crowdfunding/crowdfunding.module').then(
        (m) => m.CrowdfundingModule
      ),
  },
  {
    path: 'coworking',
    loadChildren: () =>
      import('./coworking/coworking.module').then((m) => m.CoworkingModule),
  },
  {
    path: 'freelancers',
    loadChildren: () =>
      import('./freelancers/freelancers.module').then(
        (m) => m.FreelancersModule
      ),
  },
  {
    path: 'learning',
    loadChildren: () =>
      import('./learning/learning.module').then((m) => m.LearningModule),
  },
  {
    path: 'community',
    loadChildren: () =>
      import('./community/community.module').then((m) => m.CommunityModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./account/account.module').then((m) => m.AccountModule),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: 'login',
    component: UserLoginComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedInToItems },
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
