import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../interfaces/iHero';

@Component({
  selector: 'app-heroes-details',
  templateUrl: './heroes-details.component.html',
  styleUrls: ['./heroes-details.component.scss']
})
export class HeroesDetailsComponent implements OnInit {

  constructor() { }
  @Input() hero: Hero;
  ngOnInit() { }
}
