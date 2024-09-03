import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})

export class AddCharacterComponent {

  @Output()
  public onNewCharcater: EventEmitter<Character> = new EventEmitter();

  public charcater:Character = {
    name: '',
    power: 0
  }

  emitCharater (): void {
    console.log(this.charcater)
    if(this.charcater.name.length === 0) return;

    this.onNewCharcater.emit(this.charcater);

    this.charcater ={ name:'', power:0 };


  }
}
