import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevelopmentComponent } from './development.component';
import { ContainerComponent } from './container/container.component';

const routes: Routes = [
  {
    path: '',
    component: ContainerComponent,
    children: [
      {
        path: '',
        component: DevelopmentComponent,
      },
      {
        path: 'repositories',
        loadChildren: () =>
          import('./repositories/repositories.module').then(
            (m) => m.RepositoriesModule
          ),
      },
      {
        path: 'projects',
        loadChildren: () =>
          import('./projects/projects.module').then(
            (m) => m.ProjectsModule
          ),
      },
      {
        path: 'issues',
        loadChildren: () =>
          import('./issues/issues.module').then(
            (m) => m.IssuesModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevelopmentRoutingModule {}
