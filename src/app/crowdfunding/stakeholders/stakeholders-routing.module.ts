import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StakeholdersComponent } from './stakeholders.component';


const routes: Routes = [
  {
    path: '', component: StakeholdersComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StakeholdersRoutingModule { }
