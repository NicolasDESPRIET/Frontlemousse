import { TestBed } from '@angular/core/testing';

import { RedirectHomeToWorkspaceWhenConnectedGuard } from './redirect-home-to-workspace-when-connected.guard';

describe('RedirectHomeToWorkspaceWhenConnectedGuard', () => {
  let guard: RedirectHomeToWorkspaceWhenConnectedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RedirectHomeToWorkspaceWhenConnectedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
