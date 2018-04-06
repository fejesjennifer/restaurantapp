import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DagobaComponent } from './dagoba.component';

describe('DagobaComponent', () => {
  let component: DagobaComponent;
  let fixture: ComponentFixture<DagobaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DagobaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DagobaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
