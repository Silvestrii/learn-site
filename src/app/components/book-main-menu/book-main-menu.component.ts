import { Component, DoCheck, AfterContentChecked, OnInit } from '@angular/core';
import { IMenu } from 'src/app/entities/IMainMenu';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'book-main-menu',
  templateUrl: './book-main-menu.component.html',
  styleUrls: ['./book-main-menu.component.scss']
})
export class BookMainMenuComponent implements OnInit{

  public mainMenu: IMenu[];
  constructor(private commonService: CommonService) { 
  }
  
  ngOnInit() {
    setTimeout(() => {
      this.mainMenu = this.commonService.getDataTranslate("MAIN_MENU_NAME");
    }, 100);
  }

}
