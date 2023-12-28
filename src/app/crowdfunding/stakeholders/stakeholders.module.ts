import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StakeholdersRoutingModule } from './stakeholders-routing.module';
import { StakeholdersComponent } from './stakeholders.component';


@NgModule({
  declarations: [
    StakeholdersComponent
  ],
  imports: [
    CommonModule,
    StakeholdersRoutingModule
  ]
})
export class StakeholdersModule { }
