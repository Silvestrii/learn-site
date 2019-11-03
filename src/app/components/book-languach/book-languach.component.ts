import { Component, OnInit } from '@angular/core';
import { ILanguach } from 'src/app/entities/ILanguach';

@Component({
  selector: 'book-book-languach',
  templateUrl: './book-languach.component.html',
  styleUrls: ['./book-languach.component.scss']
})
export class BookLanguachComponent implements OnInit {

  public langs: ILanguach[];
  constructor() { 
    this.langs = [
      {
        code: 1234,
        name: "русский",
        img: "/.."
      },
      {
        code: 2345,
        name: "english",
        img: "/.."
      }
    ];
  }

  ngOnInit() {
  }

}
