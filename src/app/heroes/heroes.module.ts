import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { HeroesService } from './services/heroes.service';
import { HeroesDetailsComponent } from './heroes-details/heroes-details.component';


@NgModule({
    declarations: [HeroesListComponent, HeroesDetailsComponent],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    providers: [
        HeroesService
    ],
    exports: [ HeroesListComponent ]
})
export class HeroesModule {}