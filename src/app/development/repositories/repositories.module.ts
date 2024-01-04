import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepositoriesRoutingModule } from './repositories-routing.module';
import { RepositoriesComponent } from './repositories.component';
import { RepositoryComponent } from './repository/repository.component';


@NgModule({
  declarations: [
    RepositoriesComponent,
    RepositoryComponent
  ],
  imports: [
    CommonModule,
    RepositoriesRoutingModule
  ]
})
export class RepositoriesModule { }
