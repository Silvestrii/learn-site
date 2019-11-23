import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookGameUnityComponent } from './book-game-unity.component';

describe('BookGameUnityComponent', () => {
  let component: BookGameUnityComponent;
  let fixture: ComponentFixture<BookGameUnityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookGameUnityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookGameUnityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
