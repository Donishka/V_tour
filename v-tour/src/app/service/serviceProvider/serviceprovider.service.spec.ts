import { TestBed, inject } from '@angular/core/testing';

import { ServiceproviderService } from './serviceprovider.service';

describe('ServiceproviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceproviderService]
    });
  });

  it('should be created', inject([ServiceproviderService], (service: ServiceproviderService) => {
    expect(service).toBeTruthy();
  }));
});
