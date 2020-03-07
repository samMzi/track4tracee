import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnlevementsComponent } from './enlevements.component';

describe('EnlevementsComponent', () => {
  let component: EnlevementsComponent;
  let fixture: ComponentFixture<EnlevementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnlevementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnlevementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
