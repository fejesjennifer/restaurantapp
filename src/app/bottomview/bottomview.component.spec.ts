import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomviewComponent } from './bottomview.component';

describe('BottomviewComponent', () => {
  let component: BottomviewComponent;
  let fixture: ComponentFixture<BottomviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
