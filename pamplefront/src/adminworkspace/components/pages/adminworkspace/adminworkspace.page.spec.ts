import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminworkspacePage } from './adminworkspace.page';

describe('AdminworkspacePage', () => {
  let component: AdminworkspacePage;
  let fixture: ComponentFixture<AdminworkspacePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminworkspacePage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminworkspacePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
