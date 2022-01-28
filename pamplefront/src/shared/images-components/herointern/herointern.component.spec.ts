import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerointernComponent } from './herointern.component';

describe('HerointernComponent', () => {
  let component: HerointernComponent;
  let fixture: ComponentFixture<HerointernComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HerointernComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HerointernComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
