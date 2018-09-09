import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAccountComponent } from './client-account.component';

describe('ClientAccountComponent', () => {
  let component: ClientAccountComponent;
  let fixture: ComponentFixture<ClientAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
