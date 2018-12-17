//ng generate module app-routing --flat --module=app
// --flat puts the file in src/app instead of its own folder.
// --module=app tells the CLI to register it in the imports array of the AppModule.

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';

//Routes tell the router which view to display when a user clicks a link or pastes a URL into the browser address bar.
// Angular Route has 2 components: path - a string that matches the URL in the browser address bar.
// component - the component that the router should create when navigating to this route.

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ], // The method is called forRoot() because you configure the router at the application's root level. The forRoot() method supplies the service providers and directives needed for routing, and performs the initial navigation based on the current browser URL.
  exports: [ RouterModule ]
})
export class AppRoutingModule { }