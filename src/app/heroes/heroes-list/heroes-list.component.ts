import { Component, OnInit } from '@angular/core';

import {HeroesService} from '../services/heroes.service'
import { Hero } from '../interfaces/iHero';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss']
})
export class HeroesListComponent implements OnInit {

  public heroes: Hero[];
  public hero: Hero

  constructor(
    private heroesService: HeroesService
  ) { }

  ngOnInit() {
    this.getAllHeroes();
    this.getHeroById();
  }


  getAllHeroes(){
    this.heroesService.getAllHeroes().subscribe(
      (res) => {
        this.heroes = res
        console.log(res);    
      }
    )
  }

  getHeroById(){
    this.heroesService.getHeroById(1).subscribe(
      (res) => {
        this.hero = res;
        console.log(this.hero);    
      }
    )
  }

}
