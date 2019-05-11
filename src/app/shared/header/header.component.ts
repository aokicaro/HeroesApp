import { Component, OnInit} from '@angular/core';

import { Globals } from '../../service/global.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private global: Globals
  ) { }

  ngOnInit() {
  }

}
