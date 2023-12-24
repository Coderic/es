import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LearningComponent } from './learning.component';

const routes: Routes = [
  {
    path: '', component: LearningComponent
  },
  {
    path: 'course',
    loadChildren: () =>
      import('./course/course.module').then(
        (m) => m.CourseModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearningRoutingModule { }
