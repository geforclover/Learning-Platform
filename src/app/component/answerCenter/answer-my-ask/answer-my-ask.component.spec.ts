import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerMyAskComponent } from './answer-my-ask.component';

describe('AnswerMyAskComponent', () => {
  let component: AnswerMyAskComponent;
  let fixture: ComponentFixture<AnswerMyAskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswerMyAskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerMyAskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
