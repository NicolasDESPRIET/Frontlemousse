import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicdoqcmComponent } from './picdoqcm.component';

describe('PicdoqcmComponent', () => {
  let component: PicdoqcmComponent;
  let fixture: ComponentFixture<PicdoqcmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PicdoqcmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PicdoqcmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
