import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private _title: Title, private _meta: Meta) { }

  ngOnInit() {
    this._title.setTitle('About Page');
    this._meta.updateTag({ name: 'description', content: 'About Page Description' });
  }
}
