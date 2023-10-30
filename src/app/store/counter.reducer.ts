import {createReducer, on} from "@ngrx/store";
import {decrement, increment, initCounter, setCounter} from "./counter.actions";

const initialState = 0;
export const counterReducer = createReducer(
  initialState,
  on(increment, (state: number, action) => state +  action.value),
  on(decrement, (state: number, action) => state - action.value),
  on(initCounter, (state: number) => state),
  on(setCounter, (state: number, action) => action.value),
);
