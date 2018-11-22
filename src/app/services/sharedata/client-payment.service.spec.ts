import { TestBed, inject } from '@angular/core/testing';

import { ClientPaymentService } from './client-payment.service';

describe('ClientPaymentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientPaymentService]
    });
  });

  it('should be created', inject([ClientPaymentService], (service: ClientPaymentService) => {
    expect(service).toBeTruthy();
  }));
});
