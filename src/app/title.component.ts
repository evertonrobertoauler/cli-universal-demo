import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'title',
  template: `{{title}}`
})
export class TitleComponent implements OnInit {

  title: string;

  constructor(private _router: Router) { }

  ngOnInit() {
    this._router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        switch (event.urlAfterRedirects) {
          case '/':
            this.title = 'Home Page';
            break;
          case '/about':
            this.title = 'About Page';
            break;
        }
      }
    });
  }
}
