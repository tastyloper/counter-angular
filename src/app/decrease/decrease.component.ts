import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-decrease',
  templateUrl: './decrease.component.html',
  styleUrls: ['./decrease.component.css']
})
export class DecreaseComponent{
  @Output() decrease = new EventEmitter<void>();
}
