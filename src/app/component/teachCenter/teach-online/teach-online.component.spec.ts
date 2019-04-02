import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachOnlineComponent } from './teach-online.component';

describe('TeachOnlineComponent', () => {
  let component: TeachOnlineComponent;
  let fixture: ComponentFixture<TeachOnlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachOnlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
