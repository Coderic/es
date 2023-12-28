import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { CourseComponent } from './course.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { YoutubeService } from './youtube.service';

@NgModule({
  declarations: [
    CourseComponent,
    PlaylistComponent
  ],
  imports: [
    CommonModule,
    CourseRoutingModule,
    YouTubePlayerModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    YoutubeService
  ]
})
export class CourseModule { }
