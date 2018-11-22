import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewPackageComponent } from './add-new-package.component';

describe('AddNewPackageComponent', () => {
  let component: AddNewPackageComponent;
  let fixture: ComponentFixture<AddNewPackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewPackageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
