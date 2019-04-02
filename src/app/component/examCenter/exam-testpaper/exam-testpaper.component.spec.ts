import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamTestpaperComponent } from './exam-testpaper.component';

describe('ExamTestpaperComponent', () => {
  let component: ExamTestpaperComponent;
  let fixture: ComponentFixture<ExamTestpaperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamTestpaperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamTestpaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
