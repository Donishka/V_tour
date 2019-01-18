import { TestBed, inject } from '@angular/core/testing';

import { PackagePaymentService } from './package-payment.service';

describe('PackagePaymentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PackagePaymentService]
    });
  });

  it('should be created', inject([PackagePaymentService], (service: PackagePaymentService) => {
    expect(service).toBeTruthy();
  }));
});
