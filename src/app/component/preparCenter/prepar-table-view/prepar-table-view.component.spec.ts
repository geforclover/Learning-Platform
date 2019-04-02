import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreparTableViewComponent } from './prepar-table-view.component';

describe('PreparTableViewComponent', () => {
  let component: PreparTableViewComponent;
  let fixture: ComponentFixture<PreparTableViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreparTableViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreparTableViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
