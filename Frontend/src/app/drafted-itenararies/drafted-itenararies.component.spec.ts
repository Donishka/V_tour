import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftedItenarariesComponent } from './drafted-itenararies.component';

describe('DraftedItenarariesComponent', () => {
  let component: DraftedItenarariesComponent;
  let fixture: ComponentFixture<DraftedItenarariesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraftedItenarariesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraftedItenarariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
