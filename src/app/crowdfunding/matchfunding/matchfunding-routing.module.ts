import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatchfundingComponent } from './matchfunding.component';

const routes: Routes = [
  {
    path: '', component: MatchfundingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatchfundingRoutingModule { }
