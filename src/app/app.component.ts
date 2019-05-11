import { Component, ViewChild, ElementRef, Renderer2, OnInit } from '@angular/core';

import { Globals } from './service/global.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('theme') theme: ElementRef;

  private themeName: string;

  constructor(
    private renderer: Renderer2,
    private global: Globals
  ) { }

  ngOnInit() {
    this.themeName = this.theme.nativeElement.classList[0];
  }

  tradeTheme() {

    this.themeName = this.theme.nativeElement.classList[0];
    if(this.global.role === 'batman') {
      this.global.role = 'spider';
      // this.renderer.removeClass(this.theme.nativeElement, 'batman');
      // this.renderer.addClass(this.theme.nativeElement, 'spider');
    } else {
      this.global.role = 'batman';
      // this.renderer.removeClass(this.theme.nativeElement, 'spider');
      // this.renderer.addClass(this.theme.nativeElement, 'batman');

    }
    console.log(this.global.role);
    
  }



}
