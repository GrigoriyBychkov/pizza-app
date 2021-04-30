import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  public counter = 0;

  @Output() public counterChange = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  increase() {
    this.counter++;
    this.counterChange.emit(this.counter);
  }

  decrease() {
    if (this.counter > 0) {
      this.counter--;
      this.counterChange.emit(this.counter);
    }
  }

}
