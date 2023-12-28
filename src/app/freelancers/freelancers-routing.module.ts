import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FreelancersComponent } from './freelancers.component';
import { ContainerComponent } from './container/container.component';


const routes: Routes = [
  {
    path: '', component: ContainerComponent,
    children: [
      {
        path: '', component: FreelancersComponent,
      },
      {
        path: 'projects',
        loadChildren: () =>
          import('./projects/projects.module').then(
            (m) => m.ProjectsModule
          ),
      },
      {
        path: 'contests',
        loadChildren: () =>
          import('./contests/contests.module').then(
            (m) => m.ContestsModule
          ),
      },
      {
        path: 'freelancers',
        loadChildren: () =>
          import('./freelancers/freelancers.module').then(
            (m) => m.FreelancersModule
          ),
      },
      {
        path: 'recruiters',
        loadChildren: () =>
          import('./recruiters/recruiters.module').then(
            (m) => m.RecruitersModule
          ),
      },
      {
        path: 'local-jobs',
        loadChildren: () =>
          import('./local-jobs/local-jobs.module').then(
            (m) => m.LocalJobsModule
          ),
      },
      {
        path: 'exams',
        loadChildren: () =>
          import('./exams/exams.module').then(
            (m) => m.ExamsModule
          ),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FreelancersRoutingModule { }
