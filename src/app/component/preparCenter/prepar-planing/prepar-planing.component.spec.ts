import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreparPlaningComponent } from './prepar-planing.component';

describe('PreparPlaningComponent', () => {
  let component: PreparPlaningComponent;
  let fixture: ComponentFixture<PreparPlaningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreparPlaningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreparPlaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
