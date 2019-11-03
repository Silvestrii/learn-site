import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookLanguachComponent } from './book-languach.component';

describe('BookLanguachComponent', () => {
  let component: BookLanguachComponent;
  let fixture: ComponentFixture<BookLanguachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookLanguachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookLanguachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
