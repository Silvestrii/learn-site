import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookMainSliderComponent } from './book-main-slider.component';

describe('BookMainSliderComponent', () => {
  let component: BookMainSliderComponent;
  let fixture: ComponentFixture<BookMainSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookMainSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookMainSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
