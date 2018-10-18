import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewItineraryComponent } from './view-itinerary.component';

describe('ViewItineraryComponent', () => {
  let component: ViewItineraryComponent;
  let fixture: ComponentFixture<ViewItineraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewItineraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewItineraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
