import { ItineraryModule } from './itinerary.module';

describe('ItineraryModule', () => {
  let itineraryModule: ItineraryModule;

  beforeEach(() => {
    itineraryModule = new ItineraryModule();
  });

  it('should create an instance', () => {
    expect(itineraryModule).toBeTruthy();
  });
});
