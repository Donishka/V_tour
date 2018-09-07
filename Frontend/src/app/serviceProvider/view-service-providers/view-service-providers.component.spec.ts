import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewServiceProvidersComponent } from './view-service-providers.component';

describe('ViewServiceProvidersComponent', () => {
  let component: ViewServiceProvidersComponent;
  let fixture: ComponentFixture<ViewServiceProvidersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewServiceProvidersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewServiceProvidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
