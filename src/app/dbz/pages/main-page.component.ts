import { Component} from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  /* inyección de dependencias */

  constructor(private dbzService: DbzService){

  }
  get characters(): Character[]{
    return [...this.dbzService.characters];
  }

  onDeletedCharacter(id: string){
    this.dbzService.deletedCharacterById(id);
  }

  onNewCharacter(character: Character): void{
    this.dbzService.addCharacter(character)
  }

}
