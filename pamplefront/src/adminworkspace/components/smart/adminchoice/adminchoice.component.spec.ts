import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminchoiceComponent } from './adminchoice.component';

describe('AdminchoiceComponent', () => {
  let component: AdminchoiceComponent;
  let fixture: ComponentFixture<AdminchoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminchoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminchoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
