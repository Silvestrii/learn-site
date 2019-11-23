import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VCourseUnity3dComponent } from './book-v-course-unity3d';

describe('VCourseUnity3dComponent', () => {
  let component: VCourseUnity3dComponent;
  let fixture: ComponentFixture<VCourseUnity3dComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VCourseUnity3dComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VCourseUnity3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
