import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Hero } from './hero';
import { HeroService } from './hero.service';
/**
 * The component class name should be written in upper camel case and end in the word "Component". 
 * The hero detail component class is HeroDetailComponent.
The component file name should be spelled in lower dash case, each word separated by dashes, 
and end in .component.ts. The HeroDetailComponent class goes in the hero-detail.component.ts file.
 */
@Component({
    selector: 'hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.css'],
})

//Always export the component class because you'll always import it elsewhere.
//Like public in java
export class HeroDetailComponent implements OnInit{
    ngOnInit(): void {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
            .subscribe(hero => this.hero = hero);
    }
    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ){}
    @Input() hero: Hero;
    goBack(): void {
        this.location.back();
    }
    save(): void {
        this.heroService.update(this.hero)
            .then(() => this.goBack());
    }
}