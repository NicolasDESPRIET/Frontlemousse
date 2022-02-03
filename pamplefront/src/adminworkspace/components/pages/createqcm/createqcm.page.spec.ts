import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateqcmPage } from './createqcm.page';

describe('CreateqcmPage', () => {
  let component: CreateqcmPage;
  let fixture: ComponentFixture<CreateqcmPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateqcmPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateqcmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
