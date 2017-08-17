import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _title: Title, private _meta: Meta) { }

  ngOnInit() {
    this._title.setTitle('Home Page');
    this._meta.updateTag({ name: 'description', content: 'Home Page Description' });
  }

}
