import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExpectationComponent } from './work-expectation.component';

describe('WorkExpectationComponent', () => {
  let component: WorkExpectationComponent;
  let fixture: ComponentFixture<WorkExpectationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkExpectationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkExpectationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
