import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerTableViewComponent } from './answer-table-view.component';

describe('AnswerTableViewComponent', () => {
  let component: AnswerTableViewComponent;
  let fixture: ComponentFixture<AnswerTableViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswerTableViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerTableViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
