import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocalJobsRoutingModule } from './local-jobs-routing.module';
import { LocalJobsComponent } from './local-jobs.component';


@NgModule({
  declarations: [
    LocalJobsComponent
  ],
  imports: [
    CommonModule,
    LocalJobsRoutingModule
  ]
})
export class LocalJobsModule { }
