import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './rxjs.component.html',
  styles: ``
})
export class RxjsComponent {

  constructor() {
    const obs$ = new Observable(subscriber => {
      setInterval(() => {

      }, 1000)
    });
  }
}
