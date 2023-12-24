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
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrowdfundingRoutingModule { }
