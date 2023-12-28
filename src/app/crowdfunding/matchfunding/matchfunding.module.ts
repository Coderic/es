import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatchfundingRoutingModule } from './matchfunding-routing.module';
import { MatchfundingComponent } from './matchfunding.component';


@NgModule({
  declarations: [
    MatchfundingComponent
  ],
  imports: [
    CommonModule,
    MatchfundingRoutingModule
  ]
})
export class MatchfundingModule { }
