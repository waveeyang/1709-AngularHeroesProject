import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';
/**
 * 
 * Component decorator:
 *  requires a selector and template
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})
/**
 * Don't use the new keyword for Services, it will create a new one each time
 *  What if the service caches heroes and shares that cache with others? You couldn't do that.
With the AppComponent locked into a specific implementation of the HeroService, switching implementations for different scenarios, 
such as operating offline or using different mocked versions for testing, would be difficult.
 */
export class AppComponent implements OnInit {
  //init
  ngOnInit(): void {
    this.getHeroes();
  }
  title = 'Supercalifragilisticexpialidocious';
  selectedHero: Hero;
  heroes: Hero[];

  //click fun
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  //constructor
  constructor(private heroService: HeroService) {}


  getHeroes(): void {
    this.heroService.getHeroes().then(heroList => this.heroes = heroList);
  }
}
