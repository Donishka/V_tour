import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavWhiteComponent } from './nav-white.component';

describe('NavWhiteComponent', () => {
  let component: NavWhiteComponent;
  let fixture: ComponentFixture<NavWhiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavWhiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavWhiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
