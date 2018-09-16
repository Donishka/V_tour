import { TestBed, inject } from '@angular/core/testing';

import { TravelagentService } from './travelagent.service';

describe('TravelagentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TravelagentService]
    });
  });

  it('should be created', inject([TravelagentService], (service: TravelagentService) => {
    expect(service).toBeTruthy();
  }));
});
