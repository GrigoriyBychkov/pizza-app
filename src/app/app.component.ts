import { Component } from '@angular/core';
import {ApiService} from './services/api.service';
import {Observable} from 'rxjs';
import {IPizza} from './interfaces/IPizza';
import {delay} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public pizzas$: Observable<IPizza[]>;

  constructor(
    private apiService: ApiService
  ) {
    this.pizzas$ = this.apiService.getPizzaList().pipe(delay(1000));
  }
}
