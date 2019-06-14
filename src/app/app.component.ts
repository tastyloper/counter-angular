import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count = 0;

  increase() {
    this.count += 1;
  }

  decrease() {
    this.count = this.count ? this.count - 1 : 0;
  }
}
