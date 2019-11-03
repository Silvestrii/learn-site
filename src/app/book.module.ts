import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './book-routing.module';
import { BookComponent } from './book.component';
import { BookMainMenuComponent } from './components/book-main-menu/book-main-menu.component';
import { BookMainMenuModule } from './components/book-main-menu/book-main-menu.module';

@NgModule({
  declarations: [
    BookComponent,
    BookMainMenuComponent
  ],
  imports: [
    BrowserModule,
    BookMainMenuModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [BookComponent]
})
export class AppModule { }
