import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoTutorialsRoutingModule } from './video-tutorials-routing.module';
import { PlaylistComponent } from './playlist/playlist.component';


@NgModule({
  declarations: [
    PlaylistComponent
  ],
  imports: [
    CommonModule,
    VideoTutorialsRoutingModule
  ]
})
export class VideoTutorialsModule { }
