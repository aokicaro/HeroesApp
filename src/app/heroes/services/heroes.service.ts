import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Hero } from '../interfaces/iHero'

@Injectable()
export class HeroesService {

  private tokenFacebook = '10217382249604089';

  constructor(
    private http: HttpClient
  ) { }


  public getHeroById(id:number){
    return this.http.get<Hero>(`/api/${this.tokenFacebook}/${id}`);
  }

}
