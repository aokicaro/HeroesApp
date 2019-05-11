import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';

import { HeroesService } from '../services/heroes.service'
import { HeroesFavoriteService } from '../services/heroes-favorite.service';
import { Globals } from '../../service/global.service';


import { Hero } from '../interfaces/iHero';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss']
})
export class HeroesListComponent implements OnInit {

  private heroes: Hero[] = [];
  private heroPage: number = 1;

  private selectedHero: Hero;

  constructor(
    private heroesService: HeroesService,
    private favoriteService: HeroesFavoriteService,
    private global: Globals
  ) { }


  ngOnInit() {
    this.getHeroes(this.heroPage);
  }

  getHeroes(page: number) {
    // Api doenst have a mode to get all heroes so i will make 10 requisitions
    let index = 1;
    const until = (page * 10) + 1;
    let localHero;

    page !== 1 ? index = page + (9 * (page - 1)) : false;

    this.heroes = [];

    for (index; index < until; index++) {
      localHero = localStorage.getItem(index.toString());
      if (localHero === null) {
        this.getHeroById(index);
      } else {
        const heroStored: Hero = JSON.parse(localHero);
        this.heroes.push(heroStored);
      }

    }
  }

  getHeroById(index: number) {
    this.heroesService.getHeroById(index).subscribe(
      (res) => {
        if (res.response === 'success') {
          this.heroes.push(res);
        } else {
          // Implement error component

        }
      },
      (err) => {
        console.log(err);
        // Implement error component
      },
      () => {
        this.heroes.forEach(
          (hero) => {
            localStorage.setItem(`${hero.id}`, JSON.stringify(hero));
          }
        )
      }
    );
  }

  setFavoriteHeroes(heroName: string, hero: Hero) {
    this.favoriteService.setFavoriteHeroes(heroName, hero);
  }

  seeDetail(hero: Hero) {
    this.selectedHero !== hero ? this.selectedHero = hero : this.selectedHero = null
  }

  heroPagination(pag: string) {

    if (pag === 'more') {
      this.heroPage += 1;
    } else if (this.heroPage > 1) {
      this.heroPage -= 1;
    }

    if (this.heroPage > 0) {
      this.getHeroes(this.heroPage);
    }
  }
}
