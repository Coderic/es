import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvestorsRoutingModule } from './investors-routing.module';
import { InvestorsComponent } from './investors.component';


@NgModule({
  declarations: [
    InvestorsComponent
  ],
  imports: [
    CommonModule,
    InvestorsRoutingModule
  ]
})
export class InvestorsModule { }
