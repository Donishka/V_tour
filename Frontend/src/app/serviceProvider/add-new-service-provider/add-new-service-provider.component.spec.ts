import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewServiceProviderComponent } from './add-new-service-provider.component';

describe('AddNewServiceProviderComponent', () => {
  let component: AddNewServiceProviderComponent;
  let fixture: ComponentFixture<AddNewServiceProviderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewServiceProviderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewServiceProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
