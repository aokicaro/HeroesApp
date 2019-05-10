import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { CookieService } from 'ngx-cookie-service';

import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { HeroesService } from './services/heroes.service';
import { HeroesDetailsComponent } from './heroes-details/heroes-details.component';
import { HeroesFavoriteService } from './services/heroes-favorite.service';
import { HeroesFavoriteComponent } from './heroes-favorite/heroes-favorite.component';


@NgModule({
    declarations: [HeroesListComponent, HeroesDetailsComponent, HeroesFavoriteComponent],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    providers: [
        HeroesService,
        HeroesFavoriteService,
        CookieService
        
    ],
    exports: [ HeroesListComponent ]
})
export class HeroesModule {}