import { TestBed, inject } from '@angular/core/testing';

import { SharedataService } from './sharedata.service';

describe('SharedataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SharedataService]
    });
  });

  it('should be created', inject([SharedataService], (service: SharedataService) => {
    expect(service).toBeTruthy();
  }));
});
