import { Component } from '@angular/core';
import { ChartData, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-chart-one',
  templateUrl: './chart-one.component.html',
  styleUrl: './chart-one.component.css'
})
export class ChartOneComponent {

  public donutChartLabels: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales',
  ];

  public data: number[] = [250, 350, 298];
}
