import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageinternsPanel } from './manageinterns.panel';

describe('ManageinternsPanel', () => {
  let component: ManageinternsPanel;
  let fixture: ComponentFixture<ManageinternsPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageinternsPanel ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageinternsPanel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
