import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerMyCollectionComponent } from './answer-my-collection.component';

describe('AnswerMyCollectionComponent', () => {
  let component: AnswerMyCollectionComponent;
  let fixture: ComponentFixture<AnswerMyCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswerMyCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerMyCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
