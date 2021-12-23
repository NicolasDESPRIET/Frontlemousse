import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternworkspacepageComponent } from './internworkspacepage.component';

describe('InternworkspacepageComponent', () => {
  let component: InternworkspacepageComponent;
  let fixture: ComponentFixture<InternworkspacepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternworkspacepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternworkspacepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
