import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreelancersRoutingModule } from './freelancers-routing.module';
import { FreelancersComponent } from './freelancers.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ContainerComponent } from './container/container.component';


@NgModule({
  declarations: [
    FreelancersComponent,
    NavigationComponent,
    ContainerComponent
  ],
  imports: [
    CommonModule,
    FreelancersRoutingModule
  ]
})
export class FreelancersModule { }
