import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkUnpublishComponent } from './work-unpublish.component';

describe('WorkUnpublishComponent', () => {
  let component: WorkUnpublishComponent;
  let fixture: ComponentFixture<WorkUnpublishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkUnpublishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkUnpublishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
