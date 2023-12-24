import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevelopmentRoutingModule } from './development-routing.module';
import { DevelopmentComponent } from './development.component';
import { NavigationComponent } from './navigation/navigation.component';


@NgModule({
  declarations: [
    DevelopmentComponent,
    NavigationComponent
  ],
  imports: [
    CommonModule,
    DevelopmentRoutingModule
  ]
})
export class DevelopmentModule { }
