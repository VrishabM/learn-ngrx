import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {CounterState} from "../../../../models/counter.state.model";
import {Observable} from "rxjs";

@Component({
  selector: 'ngrx-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.less']
})
export class ValueComponent implements OnInit {

  counter$!: Observable<CounterState>;

  constructor(private store: Store<{ counter: CounterState }>) { }

  ngOnInit(): void {
    this.counter$ = this.store.select("counter");
  }

}
