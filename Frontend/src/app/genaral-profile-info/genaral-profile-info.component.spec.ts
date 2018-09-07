import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenaralProfileInfoComponent } from './genaral-profile-info.component';

describe('GenaralProfileInfoComponent', () => {
  let component: GenaralProfileInfoComponent;
  let fixture: ComponentFixture<GenaralProfileInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenaralProfileInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenaralProfileInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
