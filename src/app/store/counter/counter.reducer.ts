import {createReducer, on} from "@ngrx/store";
import {counterState} from "./counter.state";
import {decrement, increment, reset} from "./counter.action";

export const counterReducer = createReducer(
  counterState,
  on(increment, (state) => {
      return {
        ...state,
        counter: state.counter + 10
      };
    }
  ),
  on(decrement, (state) => {
      return {
        ...state,
        counter: state.counter - 1
      };
    }
  ),
  on(reset, (state) => {
      return {
        ...state,
        counter: 0
      };
    }
  ),
);
