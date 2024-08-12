import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `

  <h1>Counter: {{counter}} </h1>

  <button (click)="increaseBy(-1)">-1</button>
  <button (click)=" resetCounter()">reset</button>
  <button (click)="increaseBy(+1)">+1</button>
  <hr style="height: 2px; background: yellowgreen;">

  `
})

export class CounterComponent {

  public counter: number = 10;

  increaseBy(number: number):void{
    this.counter += number;
  }

  resetCounter():void{
    this.counter = 10;
  }

}
