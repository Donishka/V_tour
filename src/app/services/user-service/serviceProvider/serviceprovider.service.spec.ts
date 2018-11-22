import { TestBed, inject } from '@angular/core/testing';

import { ServiceProviderService } from './serviceprovider.service';

describe('ServiceproviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceProviderService]
    });
  });

  it('should be created', inject([ServiceProviderService], (service: ServiceProviderService) => {
    expect(service).toBeTruthy();
  }));
});
