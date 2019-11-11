import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'book-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  public mainContentObject: any;
  public mainText: string;
  constructor(private commonService: CommonService) { }

  ngOnInit() {
    setTimeout(() => {
      this.mainContentObject = this.commonService.getDataTranslate('MAIN_PAGE_CONTENT');
      console.log(this.mainContentObject)
    }, 100);
  }

}
