import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelAgentAccountComponent } from './travel-agent-account.component';

describe('TravelAgentAccountComponent', () => {
  let component: TravelAgentAccountComponent;
  let fixture: ComponentFixture<TravelAgentAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelAgentAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelAgentAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
