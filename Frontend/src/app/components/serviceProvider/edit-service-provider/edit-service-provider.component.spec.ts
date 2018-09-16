import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditServiceProviderComponent } from './edit-service-provider.component';

describe('EditServiceProviderComponent', () => {
  let component: EditServiceProviderComponent;
  let fixture: ComponentFixture<EditServiceProviderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditServiceProviderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditServiceProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
