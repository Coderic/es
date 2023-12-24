import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommunityRoutingModule } from './community-routing.module';
import { CommunityComponent } from './community.component';
import { NavigationComponent } from './navigation/navigation.component';


@NgModule({
  declarations: [
    CommunityComponent,
    NavigationComponent
  ],
  imports: [
    CommonModule,
    CommunityRoutingModule
  ]
})
export class CommunityModule { }
