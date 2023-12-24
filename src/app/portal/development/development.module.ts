import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevelopmentRoutingModule } from './development-routing.module';
import { DevelopmentComponent } from './development.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ContainerComponent } from './container/container.component';


@NgModule({
  declarations: [
    DevelopmentComponent,
    NavigationComponent,
    ContainerComponent
  ],
  imports: [
    CommonModule,
    DevelopmentRoutingModule
  ]
})
export class DevelopmentModule { }
