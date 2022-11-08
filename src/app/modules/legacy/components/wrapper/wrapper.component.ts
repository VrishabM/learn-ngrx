import {Component} from '@angular/core';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.less']
})
export class WrapperComponent {

  counter: number = 0;

  onIncrement(): void {
    this.counter++;
  }

  onDecrement(): void {
    this.counter--;
  }

  onReset(): void {
    this.counter = 0;
  }


}
