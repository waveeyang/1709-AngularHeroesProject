import { Component, Input } from '@angular/core';
import { Hero } from './Hero';
/**
 * The component class name should be written in upper camel case and end in the word "Component". 
 * The hero detail component class is HeroDetailComponent.
The component file name should be spelled in lower dash case, each word separated by dashes, 
and end in .component.ts. The HeroDetailComponent class goes in the hero-detail.component.ts file.
 */
@Component({
    selector: 'hero-detail',
    templateUrl: './hero-detail.component.html'
})

//Always export the component class because you'll always import it elsewhere.
//Like public in java
export class HeroDetailComponent {
    @Input() hero: Hero;
}