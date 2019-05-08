import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Hero } from '../interfaces/iHero'

@Injectable()
export class HeroesService {

  // Api based at the other api
  private getAllUrl: string = 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/'

  // private tokenFacebook = '10217382249604089';

  constructor(
    private http: HttpClient
  ) { }

  public getAllHeroes(){
    return this.http.get<Hero[]>(this.getAllUrl + 'all.json');
  }

  // public getHeroById(id:number){
  //   return this.http.get<Hero>(`/api/${this.tokenFacebook}/${id}`);
  // }

}
