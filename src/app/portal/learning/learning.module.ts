import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearningRoutingModule } from './learning-routing.module';
import { LearningComponent } from './learning.component';
import { NavigationComponent } from './navigation/navigation.component';


@NgModule({
  declarations: [
    LearningComponent,
    NavigationComponent
  ],
  imports: [
    CommonModule,
    LearningRoutingModule
  ]
})
export class LearningModule { }
