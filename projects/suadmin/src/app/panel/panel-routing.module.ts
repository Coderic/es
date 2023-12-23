import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PanelComponent } from './panel.component';

const routes: Routes = [
  {
    path: '', component: PanelComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'accounting-group', loadChildren: () => import('./params/accounting-group/accounting-group.module').then(m => m.AccountingGroupModule) },
      { path: 'package', loadChildren: () => import('./params/package/package.module').then(m => m.PackageModule) },
      { path: 'permission', loadChildren: () => import('./security/permission/permission.module').then(m => m.PermissionModule) },
      { path: 'user', loadChildren: () => import('./security/user/user.module').then(m => m.UserModule) },
      { path: 'authority', loadChildren: () => import('./security/authority/authority.module').then(m => m.AuthorityModule) },
      { path: 'role', loadChildren: () => import('./security/role/role.module').then(m => m.RoleModule) },
      { path: 'group', loadChildren: () => import('./security/group/group.module').then(m => m.GroupModule) },
      { path: 'country', loadChildren: () => import('./params/country/country.module').then(m => m.CountryModule) },
      { path: 'department', loadChildren: () => import('./params/department/department.module').then(m => m.DepartmentModule) },
      { path: 'city', loadChildren: () => import('./params/city/city.module').then(m => m.CityModule) },
      { path: 'contract-type', loadChildren: () => import('./params/contract-type/contract-type.module').then(m => m.ContractTypeModule) },
      { path: 'currency-type', loadChildren: () => import('./params/currency-type/currency-type.module').then(m => m.CurrencyTypeModule) },
      { path: 'transport', loadChildren: () => import('./params/transport/transport.module').then(m => m.TransportModule) },
      { path: 'shipper', loadChildren: () => import('./params/shipper/shipper.module').then(m => m.ShipperModule) },
      { path: 'identification-type', loadChildren: () => import('./params/identification-type/identification-type.module').then(m => m.IdentificationTypeModule) },
      { path: 'remitee', loadChildren: () => import('./params/remitee/remitee.module').then(m => m.RemiteeModule) },
      { path: 'package-type', loadChildren: () => import('./params/package-type/package-type.module').then(m => m.PackageTypeModule) },
      { path: 'layout', component: LayoutComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelRoutingModule { }
