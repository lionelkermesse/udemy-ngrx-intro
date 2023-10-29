import { Component } from '@angular/core';
import {CounterControlsComponent} from "./counter-controls/counter-controls.component";
import {CounterOutputComponent} from "./counter-output/counter-output.component";

@Component({
  standalone: true,
  imports: [CounterControlsComponent, CounterOutputComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
