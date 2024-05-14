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


@NgModule({
  declarations: [
    DashboardPageComponent,
    ProgressComponent,
    ChartOneComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    RouterModule,
    SharedModule,
  ],
  exports: [
    DashboardPageComponent,
    ProgressComponent,
    ChartOneComponent,
    PagesComponent
  ],
  providers: []
})
export class PagesModule { }
