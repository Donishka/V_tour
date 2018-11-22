import { TestBed, inject } from '@angular/core/testing';

import { TravelAgentService } from './travelagent.service';

describe('TravelagentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TravelAgentService]
    });
  });

  it('should be created', inject([TravelAgentService], (service: TravelAgentService) => {
    expect(service).toBeTruthy();
  }));
});
