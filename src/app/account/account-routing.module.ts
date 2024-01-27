import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      {
        path: 'training',
        loadChildren: () =>
          import('./training/training.module').then(
            (m) => m.TrainingModule
          ),
      },
      {
        path: 'modules',
        loadChildren: () =>
          import('./modules/modules.module').then(
            (m) => m.ModulesModule
          ),
      },
      {
        path: 'products',
        loadChildren: () =>
          import('./products/products.module').then(
            (m) => m.ProductsModule
          ),
      },
      {
        path: 'canvas',
        loadChildren: () =>
          import('./canvas/canvas.module').then(
            (m) => m.CanvasModule
          ),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./profile/profile.module').then(
            (m) => m.ProfileModule
          ),
      }
    ],
  },
  {
    path: 'inbox',
    loadChildren: () =>
      import('./inbox/inbox.module').then(
        (m) => m.InboxModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
