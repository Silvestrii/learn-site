import { Component } from '@angular/core';

@Component({
  selector: 'book-root',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent{
  title = 'mybook';

  constructor() {
  }
}
