import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { BookGameUnityComponent } from './components/unity3d/book-game-unity/book-game-unity.component';


const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'course-unity3d', component: BookGameUnityComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
