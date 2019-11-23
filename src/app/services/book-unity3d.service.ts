import { Injectable } from '@angular/core';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class BookUnity3dService {

  private unity3dContent: any;
  constructor(private commonService: CommonService) { 
    this.unity3dContent = this.commonService.getDataTranslate("UNITY3d_PAGE_CONTENT");
  }

  public getContentUnity3d(id: string): any{
    return this.unity3dContent[id];
  }
}
