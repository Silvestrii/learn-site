import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookMainMenuComponent } from './book-main-menu.component';

describe('BookMainMenuComponent', () => {
  let component: BookMainMenuComponent;
  let fixture: ComponentFixture<BookMainMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookMainMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookMainMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
