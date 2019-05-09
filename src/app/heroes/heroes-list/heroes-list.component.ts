import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';

import {HeroesService} from '../services/heroes.service'
import { Hero } from '../interfaces/iHero';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss']
})
export class HeroesListComponent implements OnInit {

  private hero: Hero
  private heroes: Hero[] = [];
  private countHeroes: number;

  private selectedHero: Hero;

  constructor(
    private heroesService: HeroesService
  ) { }


  ngOnInit() {
    this.getHeroes(1);
  }

  getHeroes(page:number){
    // Api doenst have a mode to get all heroes so i will make 10 requisitions
    let index = 1
    let until = (page * 10) + 1
    let localHero; 

    page !== 1 ? index = page + 9 : false;
   //  TODO :  Separete function --
    for (index; index < until; index++) {
      localHero = localStorage.getItem(index.toString())
      if(localHero === null ){
        this.heroesService.getHeroById(index).subscribe(
          (res) => {
            this.heroes.push(res);
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
      } else {        
        let heroStored:Hero = JSON.parse(localHero)
        this.heroes.push(heroStored);       
      }
    }
  }

  seeDetail(hero: Hero){
    this.selectedHero !== hero ? this.selectedHero = hero : this.selectedHero = null 
  }

}
