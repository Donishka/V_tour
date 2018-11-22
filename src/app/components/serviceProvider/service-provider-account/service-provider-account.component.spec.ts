import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceProviderAccountComponent } from './service-provider-account.component';

describe('ServiceProviderAccountComponent', () => {
  let component: ServiceProviderAccountComponent;
  let fixture: ComponentFixture<ServiceProviderAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceProviderAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceProviderAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
