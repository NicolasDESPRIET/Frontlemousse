import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternchoiceComponent } from './internchoice.component';

describe('InternchoiceComponent', () => {
  let component: InternchoiceComponent;
  let fixture: ComponentFixture<InternchoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternchoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternchoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
