import { Character } from './../interfaces/character.interface';
import { Injectable } from '@angular/core';
import {v4 as uuid } from 'uuid' /* creador de id para cada elemnto o indice de la lista*/


/* ctrl + shif p , reload window to refresh window */
/* a-service to cerate an service */
@Injectable({
  providedIn: 'root'

})


export class DbzService {


  public characters: Character[] = [
    {
      id: uuid(),
      name: 'krilin',
      power: 1800
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 11200
    },
    {
      id: uuid(),
      name: 'chaos',
      power: 1300
    }
  ];

  addCharacter(character: Character): void{

    /* creción de un objeto para  */
    const newCharacter: Character = { id: uuid(), ...character   };
    this.characters.push(newCharacter);

  }

  /*onDeletedCharacter(index:number): void{
    this.characters.splice(index, 1);
  } */

  deletedCharacterById(id: string){
    this.characters = this.characters.filter(character => character.id !== id);

  }


}
