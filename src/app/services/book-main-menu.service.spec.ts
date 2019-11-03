import { TestBed } from '@angular/core/testing';

import { BookMainMenuService } from './book-main-menu.service';

describe('BookMainMenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookMainMenuService = TestBed.get(BookMainMenuService);
    expect(service).toBeTruthy();
  });
});
