import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamRoomsArrangeComponent } from './exam-rooms-arrange.component';

describe('ExamRoomsArrangeComponent', () => {
  let component: ExamRoomsArrangeComponent;
  let fixture: ComponentFixture<ExamRoomsArrangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamRoomsArrangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamRoomsArrangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
