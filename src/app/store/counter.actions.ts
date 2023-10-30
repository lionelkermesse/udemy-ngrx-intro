import {createAction, props} from "@ngrx/store";

export const initCounter = createAction('[Counter] Init');

export const setCounter = createAction('[Counter] Set', props<{value: number}>());

export const COUNTER_INCREMENT: string = '[Counter] Increment';
export const increment = createAction(COUNTER_INCREMENT, props<{ value: number }>());

export const COUNTER_DECREMENT: string = '[Counter] Decrement';
export const decrement = createAction(COUNTER_DECREMENT, props<{ value: number }>());



