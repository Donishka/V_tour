import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewTravelAgentComponent } from './add-new-travel-agent.component';

describe('AddNewTravelAgentComponent', () => {
  let component: AddNewTravelAgentComponent;
  let fixture: ComponentFixture<AddNewTravelAgentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewTravelAgentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewTravelAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
