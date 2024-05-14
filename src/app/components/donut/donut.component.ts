import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styleUrl: './donut.component.css'
})
export class DonutComponent implements OnInit {
  
  @Input()
  public title: string = 'Untitled';
  
  @Input()
  public labels: string[] = [];

  @Input()
  public chartData: number[] = [];

  public donutChartData?: ChartData<'doughnut'>;

  public donutChartType: ChartType = 'doughnut';
  
  ngOnInit(): void {
    this.donutChartData = {
      labels: this.labels,
      datasets: [
        { data: this.chartData }
      ],
    };
  }
}
