import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesListComponent } from './heroes/heroes-list/heroes-list.component';
import { HeroesFavoriteComponent } from './heroes/heroes-favorite/heroes-favorite.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: HeroesListComponent
  },
  {
    path: 'favorite',
    component: HeroesFavoriteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
