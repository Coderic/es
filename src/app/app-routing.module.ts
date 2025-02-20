import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './account/dashboard/dashboard.component';
import { AppComponent } from './app.component';
import { AuthGuard } from '@auth0/auth0-angular';

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
      canActivate: [AuthGuard]
  },
  {
    path: '',
    loadChildren: () =>
      import('./account/account.module').then((m) => m.AccountModule),
    canActivate: [AuthGuard]
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
