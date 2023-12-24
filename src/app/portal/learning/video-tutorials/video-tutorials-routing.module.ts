import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoTutorialsComponent } from './video-tutorials.component';
import { PlaylistComponent } from './playlist/playlist.component';

const routes: Routes = [
  {
    path: '', component: VideoTutorialsComponent
  },
  {
    path: ':playlistId', component: PlaylistComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideoTutorialsRoutingModule { }
