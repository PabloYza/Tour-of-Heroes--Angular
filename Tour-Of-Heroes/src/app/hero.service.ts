import { Injectable } from '@angular/core';
 
import { Observable, of } from 'rxjs';
 
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  /* A provider is something that can create or deliver a service; in this case, it instantiates the HeroService class to provide the service. */
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) { }
  
  /* of(HEROES) returns an Observable<Hero[]> that emits a single value, the array of mock heroes. */
  // To Do: send the message after fetching the heroes
  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  
}

/* 
The HeroService could get hero data from anywhere—a web service, local storage, or a mock data source.  */