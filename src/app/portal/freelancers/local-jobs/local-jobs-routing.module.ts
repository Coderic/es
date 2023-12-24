import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocalJobsComponent } from './local-jobs.component';


const routes: Routes = [
  {
    path: '', component: LocalJobsComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocalJobsRoutingModule { }
