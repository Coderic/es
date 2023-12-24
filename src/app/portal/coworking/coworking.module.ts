import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoworkingRoutingModule } from './coworking-routing.module';
import { CoworkingComponent } from './coworking.component';


@NgModule({
  declarations: [
    CoworkingComponent
  ],
  imports: [
    CommonModule,
    CoworkingRoutingModule
  ]
})
export class CoworkingModule { }
