import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IPizza} from '../../interfaces/IPizza';
import {BasketService} from '../../services/basket.service';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})
export class PizzaComponent implements OnInit {
  @Input() pizza: IPizza;
  constructor(
    private basketService: BasketService
  ) { }

  ngOnInit(): void {
  }

  counterChange(count: number) {
    this.basketService.setPizzaCount(this.pizza, count);
    console.log(count);
  }

}
