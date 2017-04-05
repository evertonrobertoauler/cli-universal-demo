import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'meta[name="description"]',
  template: ''
})
export class MetaDescriptionComponent implements OnInit {

  @HostBinding('attr.content') content;

  constructor(private _router: Router) { }

  ngOnInit() {
    this._router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        switch (event.urlAfterRedirects) {
          case '/':
            this.content = 'Home Page Description';
            break;
          case '/about':
            this.content = 'About Page Description';
            break;
        }
      }
    });
  }
}
