import { TestBed } from '@angular/core/testing';

import { BookUnity3dService } from './book-unity3d.service';

describe('BookUnity3dService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookUnity3dService = TestBed.get(BookUnity3dService);
    expect(service).toBeTruthy();
  });
});
