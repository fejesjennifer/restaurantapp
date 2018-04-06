import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdeniComponent } from './edeni.component';

describe('EdeniComponent', () => {
  let component: EdeniComponent;
  let fixture: ComponentFixture<EdeniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdeniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdeniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
