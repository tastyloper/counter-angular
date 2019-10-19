import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CounterComponent {
  count = 0;

  increase() {
    this.count += 1;
  }

  decrease() {
    this.count = this.count ? this.count - 1 : 0;
  }
}
