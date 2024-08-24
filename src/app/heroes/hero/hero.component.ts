import { Component, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})

export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;
  public tel :string = '771-214-34-27';

  get capitalizedName():string{ /* los getrers se ven como propiedades */
    return this.name.toUpperCase();

  }

  getHeroDescription(): string{
    return `${this.name} - ${this.age}`
  }

  chanegeName():void{
    this.name = 'Goku';
  }
  changeAge():void{
    this.age = 20;
  }

  resetForm(): void{
    this.name = 'ironman';
    this.age = 45;
  }
}
