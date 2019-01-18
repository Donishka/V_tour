import { TestBed, inject } from '@angular/core/testing';

import { TravelagentPaymentService } from './travelagent-payment.service';

describe('TravelagentPaymentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TravelagentPaymentService]
    });
  });

  it('should be created', inject([TravelagentPaymentService], (service: TravelagentPaymentService) => {
    expect(service).toBeTruthy();
  }));
});
