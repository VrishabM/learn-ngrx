import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {CounterState} from "../../../../models/counter.state.model";
import {Observable} from "rxjs";
import { getCounter } from 'src/app/store/counter/counter.selector';

@Component({
  selector: 'ngrx-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.less']
})
export class ValueComponent implements OnInit {

  counter$!: Observable<number>;

  constructor(private store: Store<{ counter: CounterState }>) { }

  ngOnInit(): void {
    this.counter$ = this.store.select(getCounter);
  }

}
