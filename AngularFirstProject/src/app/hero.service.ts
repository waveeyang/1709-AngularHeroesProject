import { Injectable } from "@angular/core";
import { Headers, Http } from "@angular/http";

import 'rxjs/add/operator/toPromise';

import { Hero } from "./hero";
/**
 * applying the @Injectable() decorator from the start ensures consistency and future-proofing
 */
@Injectable()
export class HeroService {
    private heroesUrl = 'api/heroes';
    private headers = new Headers({'Content-Type': 'application/json'});
    constructor(private http: Http) {}
    /**
     * A Promise essentially promises to call back when the results are ready
     *  You ask an asynchronous service to do some work and give it a callback function
     * The service does that work and eventually calls the function with the results or an error
     */
    getHero(id: number): Promise<Hero> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as Hero)
            .catch(this.handleError);
    }

    getHeroes(): Promise<Hero[]> {
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(response => response.json() as Hero[])
            .catch(this.handleError);
    } 

    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise(resolve => {
            // Simulate server latency with 2 second delay
            setTimeout(() => resolve(this.getHeroes()), 2000);
        });
    }

    create(name: string, image: string): Promise<Hero> {
        return this.http
            .post(this.heroesUrl, JSON.stringify({name: name, image: image}), {headers: this.headers})
            .toPromise()
            .then(res => res.json() as Hero)
            .catch(this.handleError);
    }

    update(hero: Hero): Promise<Hero> {
        const url = `${this.heroesUrl}/${hero.id}`;
        return this.http
            .put(url, JSON.stringify(hero), {headers: this.headers})
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); //for demo purposes
        return Promise.reject(error.message || error);
    }
}