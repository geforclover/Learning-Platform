import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachTableViewComponent } from './teach-table-view.component';

describe('TeachTableViewComponent', () => {
  let component: TeachTableViewComponent;
  let fixture: ComponentFixture<TeachTableViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachTableViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachTableViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
