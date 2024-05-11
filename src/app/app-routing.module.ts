import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { ChartOneComponent } from './pages/chart-one/chart-one.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  { 
    path: '',
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardPageComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'chart-one', component: ChartOneComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ]
  },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
