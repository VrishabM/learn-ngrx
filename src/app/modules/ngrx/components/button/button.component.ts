import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {CounterState} from "../../../../models/counter.state.model";
import {decrement, increment, reset} from "../../../../store/counter/counter.action";

@Component({
  selector: 'ngrx-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less']
})
export class ButtonComponent implements OnInit {

  constructor(private store: Store<CounterState>) {
  }

  ngOnInit(): void {
  }

  onIncrement(): void {
    this.store.dispatch(increment());
  }

  onDecrement(): void {
    this.store.dispatch(decrement());
  }

  onReset(): void {
    this.store.dispatch(reset());
  }

}
