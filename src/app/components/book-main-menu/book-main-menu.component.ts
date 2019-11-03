import { Component, OnInit } from '@angular/core';
import { IMenu } from 'src/app/entities/IMainMenu';
import { BookMainMenuService } from 'src/app/services/book-main-menu.service';

@Component({
  selector: 'book-main-menu',
  templateUrl: './book-main-menu.component.html',
  styleUrls: ['./book-main-menu.component.scss']
})
export class BookMainMenuComponent implements OnInit{

  public mainMenu: IMenu[];
  constructor(private bookMenuService: BookMainMenuService) { 
    
  }

  public ngOnInit() {
    this.mainMenu = this.bookMenuService.getMenu();
    console.log(this.mainMenu);
  }

}
