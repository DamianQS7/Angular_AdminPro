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
      { path: '', component: DashboardPageComponent, title: 'Dashboard' },
      { path: 'progress', component: ProgressComponent, title: 'Progress' },
      { path: 'chart-one', component: ChartOneComponent, title: 'Charts' },
      { path: 'account-settings', component: AccountSettingsComponent, title: 'Account Settings' },
      { path: 'promises', component: PromisesComponent, title: 'Promises' },
      { path: 'rxjs', component: RxjsComponent, title: 'RxJS' },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
