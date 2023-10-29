import {bootstrapApplication} from "@angular/platform-browser";
import {AppComponent} from "./app/app.component";
import {CounterService} from "./app/counter.service";

bootstrapApplication(AppComponent, {
  providers: [
    CounterService
  ]
})
