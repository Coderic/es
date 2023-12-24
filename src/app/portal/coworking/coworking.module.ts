import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoworkingRoutingModule } from './coworking-routing.module';
import { CoworkingComponent } from './coworking.component';
import { NavigationComponent } from './navigation/navigation.component';


@NgModule({
  declarations: [
    CoworkingComponent,
    NavigationComponent
  ],
  imports: [
    CommonModule,
    CoworkingRoutingModule
  ]
})
export class CoworkingModule { }
