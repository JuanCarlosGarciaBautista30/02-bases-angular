import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public HeroNames: string[] = ['spiderman','Hulk','Wonder Woman']
  public deletedHero?:string;

  removeLastHero(): void{
    this.deletedHero = this.HeroNames.pop()
  }

}
