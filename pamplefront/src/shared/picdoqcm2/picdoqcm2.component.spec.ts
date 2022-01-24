import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Picdoqcm2Component } from './picdoqcm2.component';

describe('Picdoqcm2Component', () => {
  let component: Picdoqcm2Component;
  let fixture: ComponentFixture<Picdoqcm2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Picdoqcm2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Picdoqcm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
