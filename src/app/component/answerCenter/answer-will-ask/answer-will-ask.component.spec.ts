import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerWillAskComponent } from './answer-will-ask.component';

describe('AnswerWillAskComponent', () => {
  let component: AnswerWillAskComponent;
  let fixture: ComponentFixture<AnswerWillAskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswerWillAskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerWillAskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
