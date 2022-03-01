import { TestBed } from '@angular/core/testing';

import { RedirectToLoginPageGuard } from './redirect-to-login-page.guard';

describe('RedirectToLoginPageGuard', () => {
  let guard: RedirectToLoginPageGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RedirectToLoginPageGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
