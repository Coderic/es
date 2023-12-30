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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
