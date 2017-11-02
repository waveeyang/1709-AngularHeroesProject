import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

/**
 * 
 * Component decorator:
 *  requires a selector and template
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'Supercalifragilisticexpialidocious';
  selectedHero: Hero;
  heroes = HEROES;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}

const HEROES: Hero[] = [
    { id: 10, name: 'Illidan Stormrage' },
    { id: 11, name: 'Anakin Skywalker' },
    { id: 12, name: 'Arthas Menethil' },
    { id: 13, name: 'Legolas' },
    { id: 14, name: 'Martin the Warrior' },
    { id: 15, name: 'Aragorn' },
    { id: 16, name: 'Batman' },
    { id: 17, name: 'Wolverine' },
    { id: 18, name: 'Uchiha Sasuke' },
    { id: 19, name: 'Uchiha Itachi' },
    { id: 20, name: 'Gimli' }
];