import { Injectable } from '@angular/core';
import { IMenu } from '../entities/IMainMenu';

@Injectable()
export class BookMainMenuService {

  private menu: IMenu[];
  constructor() { 
    this.setMenu();
  }


  public setMenu() {
    this.menu = [
      {
        name: "Главная",
        link: "/"
      },
      {
        name: "О сайте",
        link: "/about"
      },
      {
        name: "Курсы",
        link: "/course",
        submenu: [
          {
            name: "Курс1",
            link: "/course1"
          },
          {
            name: "Курс2",
            link: "/course2"
          },
          {
            name: "Курс3",
            link: "/course3"
          }
        ]
      },
      {
        name: "Игры",
        link: "/game",
        submenu: [
          {
            name: "Игры1",
            link: "/games1"
          },
          {
            name: "Игры2",
            link: "/games2"
          },
          {
            name: "Игры3",
            link: "/games3"
          }
        ]
      }
    ];
  } 

  public getMenu() : IMenu[] {
    return this.menu;
  }
}
