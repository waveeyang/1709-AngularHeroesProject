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
  hero: Hero = {
    id:1,
    name:'Illidan'
  };
}
