import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroadminComponent } from './heroadmin.component';

describe('HeroadminComponent', () => {
  let component: HeroadminComponent;
  let fixture: ComponentFixture<HeroadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
