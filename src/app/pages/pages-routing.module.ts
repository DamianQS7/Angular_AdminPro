import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { ProgressComponent } from './progress/progress.component';
import { ChartOneComponent } from './chart-one/chart-one.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const routes: Routes = [
  { 
    path: 'dashboard',
    component: PagesComponent,
    children: [
      { path: '', component: DashboardPageComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'chart-one', component: ChartOneComponent },
      { path: 'account-settings', component: AccountSettingsComponent },
      { path: 'promises', component: PromisesComponent },
      { path: 'rxjs', component: RxjsComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
