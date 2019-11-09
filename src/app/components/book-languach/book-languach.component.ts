import { Component, OnInit, OnDestroy } from '@angular/core';
import { ILanguach } from 'src/app/entities/ILanguach';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'book-book-languach',
  templateUrl: './book-languach.component.html',
  styleUrls: ['./book-languach.component.scss']
})
export class BookLanguachComponent implements OnInit, OnDestroy {

  public langs: ILanguach[];
  private subscription: Subscription;
  constructor(private commonService: CommonService) { }

  public ngOnInit() {
    // setTimeout(() => {
    //   this.langs = this.commonService.getDataTranslate("MAIN_LANGUAGE_SELECT");
    // }, 100); 
  }

  public onChange(event: any) {
    let domain = event.target.value;
    this.commonService.setDataTranslate(domain);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
