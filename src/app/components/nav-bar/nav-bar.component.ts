import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.less']
})
export class NavBarComponent implements OnInit {

  readonly routes: Array<{link: string, title: string}> = [
    {
      link: "legacy",
      title: "Legacy"
    },
    {
      title: "NgRx Intro",
      link: "introduction-ngrx"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
