import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './book-routing.module';
import { BookComponent } from './book.component';
import { BookMainMenuComponent } from './components/book-main-menu/book-main-menu.component';
import { BookMainMenuModule } from './components/book-main-menu/book-main-menu.module';
import { BookLanguachComponent } from './components/book-languach/book-languach.component';
import { HttpService } from './services/http.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonService } from './services/common.service';
import { MainPageComponent } from './components/main-page/main-page.component';
import { BookMainSliderComponent } from './components/book-main-slider/book-main-slider.component';
import { SliderService } from './services/slider.service';

@NgModule({
  declarations: [
    BookComponent,
    BookMainMenuComponent,
    BookLanguachComponent,
    MainPageComponent,
    BookMainSliderComponent
  ],
  imports: [
    BrowserModule,
    BookMainMenuModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [HttpService, CommonService, SliderService],
  bootstrap: [BookComponent]
})
export class AppModule { }
