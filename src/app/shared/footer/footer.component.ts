import { Component, OnInit } from '@angular/core';

import { Globals } from '../../service/global.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(
    private global: Globals

  ) { }

  ngOnInit() {
  }

}
