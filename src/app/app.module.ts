import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TitleComponent } from './title.component';
import { MetaDescriptionComponent } from './meta-description.component';

export { AppComponent, TitleComponent, MetaDescriptionComponent };

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    MetaDescriptionComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'cli-universal-demo' }),
    RouterModule.forRoot([
      { path: '', loadChildren: './home/home.module#HomeModule' },
      { path: 'about', loadChildren: './about/about.module#AboutModule' },
      { path: '**', redirectTo: '', pathMatch: 'full' },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent, TitleComponent, MetaDescriptionComponent]
})
export class AppModule { }
