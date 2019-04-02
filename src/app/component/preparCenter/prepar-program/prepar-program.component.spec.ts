import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreparProgramComponent } from './prepar-program.component';

describe('PreparProgramComponent', () => {
  let component: PreparProgramComponent;
  let fixture: ComponentFixture<PreparProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreparProgramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreparProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
