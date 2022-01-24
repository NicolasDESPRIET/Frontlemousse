import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoqcmComponent } from './doqcm.component';

describe('DoqcmComponent', () => {
  let component: DoqcmComponent;
  let fixture: ComponentFixture<DoqcmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoqcmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoqcmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
