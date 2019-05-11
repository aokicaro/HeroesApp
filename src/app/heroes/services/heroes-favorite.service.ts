import { Injectable } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';

import { Hero } from '../interfaces/iHero'

@Injectable()
export class HeroesFavoriteService {

    favoriteHeroes: Hero[] = [];

  constructor(
    private cookie: CookieService
  ) { }

    getFavoriteHeroes() {
        const favorites = Object.values(this.cookie.getAll());
        this.favoriteHeroes = [];
        favorites.forEach(
            (res) => {
                const hero = JSON.parse(res.toString());
                this.favoriteHeroes.push(hero);
            }
        );
    }

    setFavoriteHeroes(heroName: string, hero: Hero) {
        this.cookie.set(heroName, JSON.stringify(hero));
        alert('This hero was favored!');
        // implement msg
    }

    deleteFavoriteHero(heroName: string) {
        this.cookie.delete(heroName);
        this.favoriteHeroes = this.favoriteHeroes.filter(
            (heroF) => heroF.name !== heroName
        )
    }

}