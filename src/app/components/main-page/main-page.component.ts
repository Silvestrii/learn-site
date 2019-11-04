import { Component, AfterContentChecked } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'book-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements AfterContentChecked {

  public mainText: string;
  constructor(private commonService: CommonService) { }

  ngAfterContentChecked() {
    setTimeout(() => {
      this.mainText = this.commonService.getDataTranslate("MAIN_PAGE_TEXT");
    }, 100);
  }

}
