import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrl: './progress.component.css'
})
export class ProgressComponent {

  public progress1: number = 25;
  public progress2: number = 35;

}
