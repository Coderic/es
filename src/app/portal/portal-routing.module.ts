import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalComponent } from './portal.component';
import { SecurityGuard } from '../security/security.guard';
import { PrepararComponent } from '../preparar/preparar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { RefundsComponent } from './refunds/refunds.component';
import { LegalComponent } from './legal/legal.component';
import { TosComponent } from './tos/tos.component';
import { FaqsComponent } from './faqs/faqs.component';

const routes: Routes = [
  {
    path: '',
    component: PortalComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'privacy', component: PrivacyComponent },
      { path: 'delivery', component: DeliveryComponent },
      { path: 'refunds', component: RefundsComponent },
      { path: 'legal', component: LegalComponent },
      { path: 'tos', component: TosComponent },
      { path: 'faqs', component: FaqsComponent },
      { path: 'preparar/:id/:hash', component: PrepararComponent },
    ],
  },
  {
    path: 'development',
    loadChildren: () =>
      import('./development/development.module').then(
        (m) => m.DevelopmentModule
      ),
  },
  {
    path: 'crowdfunding',
    loadChildren: () =>
      import('./crowdfunding/crowdfunding.module').then(
        (m) => m.CrowdfundingModule
      ),
  },
  {
    path: 'coworking',
    loadChildren: () =>
      import('./coworking/coworking.module').then((m) => m.CoworkingModule),
  },
  {
    path: 'freelancers',
    loadChildren: () =>
      import('./freelancers/freelancers.module').then(
        (m) => m.FreelancersModule
      ),
  },
  {
    path: 'learning',
    loadChildren: () =>
      import('./learning/learning.module').then((m) => m.LearningModule),
  },
  {
    path: 'community',
    loadChildren: () =>
      import('./community/community.module').then((m) => m.CommunityModule),
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortalRoutingModule {}
