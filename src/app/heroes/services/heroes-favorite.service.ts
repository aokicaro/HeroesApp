import { Injectable } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';

import { Hero } from '../interfaces/iHero'

@Injectable()
export class HeroesFavoriteService {

    favoriteHeroes: Hero[] = [];

  constructor(
    private cookie: CookieService
  ) { }

    getFavoriteHeroes(){
        let favorites = Object.values(this.cookie.getAll())
        favorites.forEach(
            (res) => {
                let hero = JSON.parse(res.toString());                
                this.favoriteHeroes.push(hero);            
            }
        )
        
    }

    setFavoriteHeroes(heroName:string, hero: Hero){
        this.cookie.set(heroName, JSON.stringify(hero));
    }

}