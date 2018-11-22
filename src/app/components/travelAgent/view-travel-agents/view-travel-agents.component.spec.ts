import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTravelAgentsComponent } from './view-travel-agents.component';

describe('ViewTravelAgentsComponent', () => {
  let component: ViewTravelAgentsComponent;
  let fixture: ComponentFixture<ViewTravelAgentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTravelAgentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTravelAgentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
