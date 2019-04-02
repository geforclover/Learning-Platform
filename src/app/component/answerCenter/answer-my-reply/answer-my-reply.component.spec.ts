import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerMyReplyComponent } from './answer-my-reply.component';

describe('AnswerMyReplyComponent', () => {
  let component: AnswerMyReplyComponent;
  let fixture: ComponentFixture<AnswerMyReplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswerMyReplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerMyReplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
