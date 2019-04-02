import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamExaminationComponent } from './exam-examination.component';

describe('ExamExaminationComponent', () => {
  let component: ExamExaminationComponent;
  let fixture: ComponentFixture<ExamExaminationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamExaminationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamExaminationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
