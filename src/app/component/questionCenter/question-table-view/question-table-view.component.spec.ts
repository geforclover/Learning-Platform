import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionTableViewComponent } from './question-table-view.component';

describe('QuestionTableViewComponent', () => {
  let component: QuestionTableViewComponent;
  let fixture: ComponentFixture<QuestionTableViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionTableViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionTableViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
