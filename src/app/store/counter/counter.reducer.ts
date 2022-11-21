import {createReducer, on} from "@ngrx/store";
import {counterState} from "./counter.state";
import {decrement, increment, reset} from "./counter.action";

export const counterReducer = createReducer(
  counterState,
  on(increment, (state, props) => {
      return {
        ...state,
        counter: state.counter + props.value
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
