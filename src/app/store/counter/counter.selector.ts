import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CounterState } from 'src/app/models/counter.state.model';
import { counterState } from './counter.state';

const counterFeatureSelector = createFeatureSelector<CounterState>('counter');

export const getCounter = createSelector(
  counterFeatureSelector,
  (state: CounterState): number => {
    return state.counter;
  }
);
