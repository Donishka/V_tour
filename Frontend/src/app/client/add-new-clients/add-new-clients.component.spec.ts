import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewClientsComponent } from './add-new-clients.component';

describe('AddNewClientsComponent', () => {
  let component: AddNewClientsComponent;
  let fixture: ComponentFixture<AddNewClientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewClientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
