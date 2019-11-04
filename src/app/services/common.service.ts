import { Injectable, OnDestroy } from '@angular/core';
import { HttpService } from './http.service';
import { Subscription } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService implements OnDestroy{

  private dataTranslate: any;
  private subscribtion: Subscription;
  constructor(private httpService: HttpService) { 
    this.setDataTranslate();
  }

  public setDataTranslate(par?: string) : void {
    let params = null;
    if (par) {
      params = new HttpParams().set('nameFile', par);
    }
    
    this.subscribtion = this.httpService.getLanguachTranslate(params).subscribe((response) => {
      this.dataTranslate = response;
    });
  }

  public getDataTranslate(key: string) : any  {
    return this.dataTranslate[key];
  }

  ngOnDestroy() {
    if (this.subscribtion) {
      this.subscribtion.unsubscribe();
    }
  }
}
