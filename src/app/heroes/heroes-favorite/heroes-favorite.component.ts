import { Component, OnInit } from '@angular/core';

import { HeroesFavoriteService } from '../services/heroes-favorite.service';
import { Hero } from '../interfaces/iHero';

@Component({
  selector: 'app-heroes-favorite',
  templateUrl: './heroes-favorite.component.html',
  styleUrls: ['./heroes-favorite.component.scss']
})
export class HeroesFavoriteComponent implements OnInit {

  private favoriteHeroes: Hero[]


  constructor(
    private heroFavoriteService: HeroesFavoriteService
  ) { }

  ngOnInit() {
    this.getFavoriteHeroes();
  }
  
  getFavoriteHeroes(){
    this.heroFavoriteService.getFavoriteHeroes();
    this.favoriteHeroes = this.heroFavoriteService.favoriteHeroes;
  }




}
