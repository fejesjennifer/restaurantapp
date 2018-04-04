import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MidviewComponent } from './midview.component';

describe('MidviewComponent', () => {
  let component: MidviewComponent;
  let fixture: ComponentFixture<MidviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MidviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MidviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
