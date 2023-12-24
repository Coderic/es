import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrowdfundingRoutingModule } from './crowdfunding-routing.module';
import { CrowdfundingComponent } from './crowdfunding.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ContainerComponent } from './container/container.component';


@NgModule({
  declarations: [
    CrowdfundingComponent,
    NavigationComponent,
    ContainerComponent
  ],
  imports: [
    CommonModule,
    CrowdfundingRoutingModule
  ]
})
export class CrowdfundingModule { }
