import { Component } from '@angular/core';
import { RegistrationService } from './services/registration.service';

@Component({
  selector: 'book-root',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent{
  title = 'mybook';

  constructor(private registrationService: RegistrationService) {
  }

  ngOnInit() {
    this.registrationService.getPattern().subscribe();
  }
}
