import {Component, OnInit} from '@angular/core';
import {CounterControlsComponent} from "./counter-controls/counter-controls.component";
import {CounterOutputComponent} from "./counter-output/counter-output.component";
import {Store} from "@ngrx/store";
import {initCounter} from "./store/counter.actions";

@Component({
  standalone: true,
  imports: [CounterControlsComponent, CounterOutputComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private store: Store<{value: number}>) {
  }
  ngOnInit(): void {
    this.store.dispatch(initCounter());
  }
}
