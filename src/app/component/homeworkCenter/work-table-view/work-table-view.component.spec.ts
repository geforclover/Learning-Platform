import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkTableViewComponent } from './work-table-view.component';

describe('WorkTableViewComponent', () => {
  let component: WorkTableViewComponent;
  let fixture: ComponentFixture<WorkTableViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkTableViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkTableViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
