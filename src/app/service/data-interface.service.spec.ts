import { TestBed, inject } from '@angular/core/testing';

import { DataInterfaceService } from './data-interface.service';

describe('DataInterfaceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataInterfaceService]
    });
  });

  it('should be created', inject([DataInterfaceService], (service: DataInterfaceService) => {
    expect(service).toBeTruthy();
  }));
});
