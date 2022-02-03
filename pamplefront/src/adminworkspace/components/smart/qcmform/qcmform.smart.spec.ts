import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QcmformSmart } from './qcmform.smart';

describe('QcmformSmart', () => {
  let component: QcmformSmart;
  let fixture: ComponentFixture<QcmformSmart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QcmformSmart ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QcmformSmart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
