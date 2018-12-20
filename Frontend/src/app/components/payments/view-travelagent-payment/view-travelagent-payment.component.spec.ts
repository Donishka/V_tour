import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTravelagentPaymentComponent } from './view-travelagent-payment.component';

describe('ViewTravelagentPaymentComponent', () => {
  let component: ViewTravelagentPaymentComponent;
  let fixture: ComponentFixture<ViewTravelagentPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTravelagentPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTravelagentPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
