import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelAgentPaymentComponent } from './travel-agent-payment.component';

describe('TravelAgentPaymentComponent', () => {
  let component: TravelAgentPaymentComponent;
  let fixture: ComponentFixture<TravelAgentPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelAgentPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelAgentPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
