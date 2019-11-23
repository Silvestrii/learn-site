import { Component, OnInit } from '@angular/core';
import { IUnityContent } from 'src/app/entities/IUnityContent';
import { BookUnity3dService } from 'src/app/services/book-unity3d.service';

@Component({
  selector: 'book-game-unity',
  templateUrl: './book-game-unity.component.html',
  styleUrls: ['./book-game-unity.component.scss']
})
export class BookGameUnityComponent implements OnInit {

  public unityContent: IUnityContent[];
  public showContent: any;
  constructor(private bookUnity3dService: BookUnity3dService) { }

  ngOnInit() {
    this.unityContent = [
      {
        id: "UNITY1_DESCRIPTION",
        name: "unity"
      },
      {
        id: "UNITY2_DESCRIPTION",
        name: "unity1"
      },
      {
        id: "UNITY3_DESCRIPTION",
        name: "unity3"
      },
      {
        id: "UNITY4_DESCRIPTION",
        name: "unity4"
      },{
        id: "UNITY5_DESCRIPTION",
        name: "unity5"
      }
    ];
  }

  public onShowDescriptionCourse(id: string) {
    this.showContent = this.bookUnity3dService.getContentUnity3d(id)["UNITY3d_DESCRIPTION_TOP"];
  }
}
