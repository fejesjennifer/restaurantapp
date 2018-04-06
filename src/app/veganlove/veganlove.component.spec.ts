import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeganloveComponent } from './veganlove.component';

describe('VeganloveComponent', () => {
  let component: VeganloveComponent;
  let fixture: ComponentFixture<VeganloveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeganloveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeganloveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
