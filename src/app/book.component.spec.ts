import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BookComponent } from './book.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        BookComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(BookComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'mybook'`, () => {
    const fixture = TestBed.createComponent(BookComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('mybook');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(BookComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('mybook app is running!');
  });
});
