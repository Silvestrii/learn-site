import { Component, DoCheck, AfterContentChecked, OnInit } from '@angular/core';
import { IMenu } from 'src/app/entities/IMainMenu';
import { CommonService } from 'src/app/services/common.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'book-main-menu',
  templateUrl: './book-main-menu.component.html',
  styleUrls: ['./book-main-menu.component.scss']
})
export class BookMainMenuComponent implements OnInit{

  public mainMenu: IMenu[];
  private subscription: Subscription;
  constructor(private commonService: CommonService) { 
  }
  
  ngOnInit() {
    this.subscription = this.commonService.getDataTranslate().subscribe(response => this.mainMenu = response["MAIN_MENU_NAME"]);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
