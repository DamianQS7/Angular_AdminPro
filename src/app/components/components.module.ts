import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter/counter.component';
import { FormsModule } from '@angular/forms';
import { DonutComponent } from './donut/donut.component';
import { BaseChartDirective, provideCharts, withDefaultRegisterables } from 'ng2-charts';


@NgModule({
  declarations: [
    CounterComponent,
    DonutComponent
  ],
  imports: [
    BaseChartDirective,
    CommonModule,
    FormsModule
  ],
  exports: [
    CounterComponent,
    DonutComponent
  ],
  providers: [provideCharts(withDefaultRegisterables())]
})
export class ComponentsModule { }
