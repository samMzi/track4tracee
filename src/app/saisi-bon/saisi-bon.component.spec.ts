import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaisiBonComponent } from './saisi-bon.component';

describe('SaisiBonComponent', () => {
  let component: SaisiBonComponent;
  let fixture: ComponentFixture<SaisiBonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaisiBonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaisiBonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
