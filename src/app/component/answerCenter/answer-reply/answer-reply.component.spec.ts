import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerReplyComponent } from './answer-reply.component';

describe('AnswerReplyComponent', () => {
  let component: AnswerReplyComponent;
  let fixture: ComponentFixture<AnswerReplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswerReplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerReplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
