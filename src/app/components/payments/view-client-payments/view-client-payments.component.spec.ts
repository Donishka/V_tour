import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewClientPaymentsComponent } from './view-client-payments.component';

describe('ViewClientPaymentsComponent', () => {
  let component: ViewClientPaymentsComponent;
  let fixture: ComponentFixture<ViewClientPaymentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewClientPaymentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewClientPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
