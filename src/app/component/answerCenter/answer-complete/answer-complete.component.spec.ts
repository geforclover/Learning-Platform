import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerCompleteComponent } from './answer-complete.component';

describe('AnswerCompleteComponent', () => {
  let component: AnswerCompleteComponent;
  let fixture: ComponentFixture<AnswerCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswerCompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
