import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamTableViewComponent } from './exam-table-view.component';

describe('ExamTableViewComponent', () => {
  let component: ExamTableViewComponent;
  let fixture: ComponentFixture<ExamTableViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamTableViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamTableViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
