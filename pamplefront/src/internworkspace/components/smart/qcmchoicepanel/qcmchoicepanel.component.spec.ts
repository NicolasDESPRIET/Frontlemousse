import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QcmchoicepanelComponent } from './qcmchoicepanel.component';

describe('QcmchoicepanelComponent', () => {
  let component: QcmchoicepanelComponent;
  let fixture: ComponentFixture<QcmchoicepanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QcmchoicepanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QcmchoicepanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
