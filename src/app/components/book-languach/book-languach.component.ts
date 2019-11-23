import { Component, OnInit, OnDestroy } from '@angular/core';
import { ILanguach } from 'src/app/entities/ILanguach';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'book-book-languach',
  templateUrl: './book-languach.component.html',
  styleUrls: ['./book-languach.component.scss']
})
export class BookLanguachComponent{

  public langs: ILanguach[];
  private subscription: Subscription;
  constructor(private commonService: CommonService) { }

  public ngOnInit() {
    this.subscription = this.commonService.getDataTranslate().subscribe(response => this.langs = response["MAIN_LANGUAGE_SELECT"]);
  }


  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
