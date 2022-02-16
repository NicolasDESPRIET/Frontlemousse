import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagequestionsPanel } from './managequestions.panel';

describe('ManagequestionsPanel', () => {
  let component: ManagequestionsPanel;
  let fixture: ComponentFixture<ManagequestionsPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagequestionsPanel ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagequestionsPanel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
