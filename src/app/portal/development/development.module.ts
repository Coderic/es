import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevelopmentRoutingModule } from './development-routing.module';
import { DevelopmentComponent } from './development.component';


@NgModule({
  declarations: [
    DevelopmentComponent
  ],
  imports: [
    CommonModule,
    DevelopmentRoutingModule
  ]
})
export class DevelopmentModule { }
