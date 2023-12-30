import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalRoutingModule } from './portal-routing.module';
import { PortalComponent } from './portal.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { RefundsComponent } from './refunds/refunds.component';
import { LegalComponent } from './legal/legal.component';
import { TosComponent } from './tos/tos.component';
import { FaqsComponent } from './faqs/faqs.component';
import { MemberCardComponent } from './member-card/member-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PortalComponent,
    HomeComponent,
    AboutComponent,
    PrivacyComponent,
    DeliveryComponent,
    RefundsComponent,
    LegalComponent,
    TosComponent,
    FaqsComponent,
    MemberCardComponent,
  ],
  imports: [
    CommonModule,
    PortalRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PortalModule { }
