import { Component, OnInit } from '@angular/core';
import {BasketService, IBasketItem} from '../../services/basket.service';
import {sumBy} from 'lodash';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  public basketList: IBasketItem[];

  constructor(
    private basketService: BasketService
  ) { }

  ngOnInit(): void {
    this.basketService.getBasket$().subscribe((basketList) => {
      this.basketList = basketList;
    });
  }

  getTotal(): number {
    return sumBy(this.basketList, item => item.pizza.price * item.count);
  }
}
