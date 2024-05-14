import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent implements OnInit{
  
  @Input()
  public progress: number = 50;
  
  @Input()
  public btnClass: string = 'btn-primary';

  @Output()
  public valueChanged: EventEmitter<number> = new EventEmitter();

  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`;
  }

  public changeValue(value: number): void {
    
    if (this.progress >= 100 && value >= 0) {
      this.progress = 100;
      this.valueChanged.emit(100);
    }

    if (this.progress <= 0 && value <= 0) {
      this.progress = 0;
      this.valueChanged.emit(0);
    }

    this.progress += value;
    this.valueChanged.emit(this.progress);
  }

  public onInputChange(value: number) {

    if (value >= 100) {
      this.progress = 100;
    } else if (value <= 0) {
      this.progress = 0;
    } else {
      this.progress = value;
    }
    
    this.valueChanged.emit(this.progress);
  }
}
