import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearningRoutingModule } from './learning-routing.module';
import { LearningComponent } from './learning.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ContainerComponent } from './container/container.component';
import { VideoTutorialsComponent } from './video-tutorials/video-tutorials.component';


@NgModule({
  declarations: [
    LearningComponent,
    NavigationComponent,
    ContainerComponent,
    VideoTutorialsComponent
  ],
  imports: [
    CommonModule,
    LearningRoutingModule
  ]
})
export class LearningModule { }
