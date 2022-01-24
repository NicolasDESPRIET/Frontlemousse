import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoqcmpageComponent } from './doqcmpage.component';

describe('DoqcmpageComponent', () => {
  let component: DoqcmpageComponent;
  let fixture: ComponentFixture<DoqcmpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoqcmpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoqcmpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
