import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'legacy-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.less']
})
export class ButtonsComponent {

  @Output() onIncrement: EventEmitter<void> = new EventEmitter<void>();
  @Output() onDecrement: EventEmitter<void> = new EventEmitter<void>();
  @Output() onReset: EventEmitter<void> = new EventEmitter<void>();

}
