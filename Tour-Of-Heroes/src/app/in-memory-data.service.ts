import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';
 
@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
        {id: 11, name: 'Magneto'},
        {id: 12, name: 'Dr.Charles'},
        {id: 13, name: 'Beast'},
        {id: 14, name: 'Phoenix'},
        {id: 15, name: 'Nightcrawler'},
        {id: 16, name: 'Wolverine'},
        {id: 17, name: 'Mystique'},
        {id: 18, name: 'Storm'},
        {id: 19, name: 'Cyclops'},
        {id: 20, name: 'Rogue'}
    ];
    return {heroes};
  }
 
  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}