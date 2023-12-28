import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './course.component';
import { PlaylistComponent } from './playlist/playlist.component';

const routes: Routes = [
  {
    path: '', component: CourseComponent
  },
  {
    path: ':playlistId', component: PlaylistComponent
  },
  {
    path: ':playlistId/:videoId', component: PlaylistComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
