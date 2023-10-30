import {Actions, createEffect, ofType} from "@ngrx/effects";
import {decrement, increment, initCounter, setCounter} from "./counter.actions";
import {of, switchMap, tap, withLatestFrom} from "rxjs";
import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {selectCount} from "./counter.selectors";

@Injectable()
export class CounterEffects {

  constructor(private actions$: Actions, private store: Store<{counter: number}>) {
  }

  loadCounter = createEffect(
    () => this.actions$.pipe(
      ofType(initCounter),
      switchMap(() => {
        const storedCount = localStorage.getItem('count');
        return of(setCounter({value: storedCount ? +storedCount : 0}));
      })
    )
  )

  saveCount = createEffect(
    () => this.actions$.pipe(
      ofType(increment, decrement),
      withLatestFrom(this.store.select(selectCount)),
      tap(([action, counter]) => {
        console.log(action);
        localStorage.setItem('count', counter.toString())
      })
    ),
    {dispatch: false}
  );
}
