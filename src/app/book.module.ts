import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './book-routing.module';
import { BookComponent } from './book.component';
import { BookMainMenuComponent } from './components/book-main-menu/book-main-menu.component';
import { BookLanguachComponent } from './components/book-languach/book-languach.component';
import { HttpService } from './services/http.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonService } from './services/common.service';
import { MainPageComponent } from './components/main-page/main-page.component';
import { BookMainSliderComponent } from './components/book-main-slider/book-main-slider.component';
import { SliderService } from './services/slider.service';
import { BookGameUnityComponent } from './components/unity3d/book-game-unity/book-game-unity.component';
import { BookMainMenuService } from './services/book-main-menu.service';
import { VCourseUnity3dComponent } from './components/unity3d/book-v-course-unity3d/book-v-course-unity3d';
import { RegistrationComponent } from './components/registration/registration.component';
import { RegistrationService } from './services/registration.service';

@NgModule({
  declarations: [
    BookComponent,
    BookMainMenuComponent,
    BookLanguachComponent,
    MainPageComponent,
    BookMainSliderComponent,
    BookGameUnityComponent,
    VCourseUnity3dComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    HttpService, 
    CommonService, 
    SliderService, 
    BookMainMenuService,
    RegistrationService
  ],
  bootstrap: [BookComponent]
})
export class AppModule { }
