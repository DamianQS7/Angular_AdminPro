import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { ProgressComponent } from './progress/progress.component';
import { ChartOneComponent } from './chart-one/chart-one.component';

const routes: Routes = [
  { 
    path: 'dashboard',
    component: PagesComponent,
    children: [
      { path: '', component: DashboardPageComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'chart-one', component: ChartOneComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
