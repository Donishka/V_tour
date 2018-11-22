import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientPaymentComponent } from './client-payment.component';

describe('ClientPaymentComponent', () => {
  let component: ClientPaymentComponent;
  let fixture: ComponentFixture<ClientPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
