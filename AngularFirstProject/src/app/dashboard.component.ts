import { Component, OnInit } from '@angular/core';

import { Hero } from './Hero';
import { HeroService } from './hero.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',//'<h3>My Dashboard</h3>'
    styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit{
    heroes: Hero[];
    ngOnInit(): void {
        this.heroService.getHeroes()
            .then(heroList => this.heroes = heroList.slice(1,5));
    }
    constructor(private heroService: HeroService) {}
}