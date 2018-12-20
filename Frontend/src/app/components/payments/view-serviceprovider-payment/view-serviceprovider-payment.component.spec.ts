import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewServiceproviderPaymentComponent } from './view-serviceprovider-payment.component';

describe('ViewServiceproviderPaymentComponent', () => {
  let component: ViewServiceproviderPaymentComponent;
  let fixture: ComponentFixture<ViewServiceproviderPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewServiceproviderPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewServiceproviderPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
