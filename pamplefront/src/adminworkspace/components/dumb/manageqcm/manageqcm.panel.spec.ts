import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageqcmPanel } from './manageqcm.panel';

describe('ManageqcmPanel', () => {
  let component: ManageqcmPanel;
  let fixture: ComponentFixture<ManageqcmPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageqcmPanel ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageqcmPanel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
