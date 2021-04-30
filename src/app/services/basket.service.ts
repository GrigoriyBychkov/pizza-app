import { Injectable } from '@angular/core';
import {IPizza} from '../interfaces/IPizza';
import {find, remove} from 'lodash';
import {Observable, Subject} from 'rxjs';

export interface IBasketItem {
  pizza: IPizza;
  count: number;
}

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  private basket: IBasketItem[] = [];

  private basketSubj = new Subject<IBasketItem[]>();

  constructor() { }

  setPizzaCount(pizza: IPizza, count: number) {
    const existedPizza = find(this.basket, (item) => {
      return item.pizza.name === pizza.name;
    });

    if (existedPizza) {
      existedPizza.count = count;
    } else {
      this.basket.push({pizza, count});
    }

    if (count === 0) {
      remove(this.basket, (item) => item.pizza.name === pizza.name);
    }
    this.basketSubj.next(this.basket.slice());
  }

  getBasket$(): Observable<IBasketItem[]> {
    return this.basketSubj.asObservable();
  }
}
