import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NapfenyesComponent } from './napfenyes.component';

describe('NapfenyesComponent', () => {
  let component: NapfenyesComponent;
  let fixture: ComponentFixture<NapfenyesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NapfenyesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NapfenyesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
