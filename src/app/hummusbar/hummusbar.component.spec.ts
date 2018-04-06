import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HummusbarComponent } from './hummusbar.component';

describe('HummusbarComponent', () => {
  let component: HummusbarComponent;
  let fixture: ComponentFixture<HummusbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HummusbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HummusbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
