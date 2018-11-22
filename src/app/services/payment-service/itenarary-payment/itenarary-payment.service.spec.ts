import { TestBed, inject } from '@angular/core/testing';

import { ItenararyPaymentService } from './itenarary-payment.service';

describe('ItenararyPaymentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItenararyPaymentService]
    });
  });

  it('should be created', inject([ItenararyPaymentService], (service: ItenararyPaymentService) => {
    expect(service).toBeTruthy();
  }));
});
