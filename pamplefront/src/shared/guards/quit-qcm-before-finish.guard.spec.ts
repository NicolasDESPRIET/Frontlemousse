import { TestBed } from '@angular/core/testing';

import { QuitQcmBeforeFinishGuard } from './quit-qcm-before-finish.guard';

describe('QuitQcmBeforeFinishGuard', () => {
  let guard: QuitQcmBeforeFinishGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(QuitQcmBeforeFinishGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
