import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../components/components.module';
import { SharedModule } from '../shared/shared.module';

import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { ProgressComponent } from './progress/progress.component';
import { ChartOneComponent } from './chart-one/chart-one.component';
import { PagesComponent } from './pages.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';


@NgModule({
  declarations: [
    DashboardPageComponent,
    ProgressComponent,
    ChartOneComponent,
    PagesComponent,
    AccountSettingsComponent,
    PromisesComponent,
    RxjsComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    RouterModule,
    SharedModule,
  ],
  exports: [
    AccountSettingsComponent,
    DashboardPageComponent,
    ProgressComponent,
    ChartOneComponent,
    PagesComponent,
    PromisesComponent
  ],
  providers: []
})
export class PagesModule { }
