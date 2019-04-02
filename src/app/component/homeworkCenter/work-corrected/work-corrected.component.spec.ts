import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkCorrectedComponent } from './work-corrected.component';

describe('WorkCorrectedComponent', () => {
  let component: WorkCorrectedComponent;
  let fixture: ComponentFixture<WorkCorrectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkCorrectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkCorrectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
