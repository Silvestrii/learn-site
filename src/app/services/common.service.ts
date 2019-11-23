import { Injectable, OnDestroy } from '@angular/core';
import { HttpService } from './http.service';
import { Subscription, Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService{

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
    
    this.dataTranslate = this.httpService.getLanguachTranslate(params);
  }

  public getDataTranslate() : Observable<any>  {
    return this.dataTranslate;
  }
}
