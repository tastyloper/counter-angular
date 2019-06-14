import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-increase',
  templateUrl: './increase.component.html',
  styleUrls: ['./increase.component.css']
})
export class IncreaseComponent {
  @Output() increase = new EventEmitter<void>();
}
