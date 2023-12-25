import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrowdfundingComponent } from './crowdfunding.component';
import { ContainerComponent } from './container/container.component';

const routes: Routes = [
  {
    path: '', component: ContainerComponent,
    children: [
      {
        path: '', component: CrowdfundingComponent,
      },
      {
        path: 'projects',
        loadChildren: () =>
          import('./projects/projects.module').then(
            (m) => m.ProjectsModule
          ),
      },
      {
        path: 'stakeholders',
        loadChildren: () =>
          import('./stakeholders/stakeholders.module').then(
            (m) => m.StakeholdersModule
          ),
      },
      {
        path: 'funds',
        loadChildren: () =>
          import('./funds/funds.module').then(
            (m) => m.FundsModule
          ),
      },
      {
        path: 'investors',
        loadChildren: () =>
          import('./investors/investors.module').then(
            (m) => m.InvestorsModule
          ),
      },
      {
        path: 'investments',
        loadChildren: () =>
          import('./investments/investments.module').then(
            (m) => m.InvestmentsModule
          ),
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrowdfundingRoutingModule { }
